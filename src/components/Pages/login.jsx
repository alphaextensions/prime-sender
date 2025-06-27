/* global google */
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { primeSenderController, setCredentials } from "../context";
import HashLoader from "react-spinners/HashLoader";
import ReactGA from "react-ga4";
import { apiFetch } from "../../utils/apiFetch";
import { useTranslation } from "react-i18next";
import "../../styles/login/login.css";


function Login() {
  const { t } = useTranslation();
  const [controller, dispatch] = primeSenderController();
  const [headline, setHeadline] = useState("");
  const [subHeadline, setSubHeadline] = useState("");
  const [isSubHeadLine, setIsSubHeadLine] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isSupportActive, setIsSupportActive] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [isPopupActive, setIsPopupActive] = useState(false)
  const url = import.meta.env.VITE_PROD_LOGIN_API;

  const navigate = useNavigate();
  document.title = t('login.pageTitle')

  const handleLogin = useCallback((cred, data) => {
    setCredentials(dispatch, { cred, data });
    navigate("/dashboard/profile")
  }, [dispatch, navigate]);

  // const isWhatsappNumExist = () => {
  //   return (window.localStorage.getItem("whatsapp_number") ? true : false)
  // }

  const isCorrectWhatsappNum = () => {
    let whatsapp_number = parseInt(window.localStorage.getItem("PRIMES::whatsapp_number"));
    return !isNaN(whatsapp_number);
  }

  const isMobileDevice = useCallback(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUserAgent = /mobile|android|iphone|ipad|tablet/.test(userAgent);

    return isTouchDevice && isMobileUserAgent;
  }, []);

  const showPopup = useCallback((headline, subHeadline, isSupportActive = false, isButtonActive = false) => {
    setIsPopupActive(true);
    setIsSubHeadLine(Boolean(subHeadline));
    setHeadline(headline);
    setSubHeadline(subHeadline || "");
    setIsSupportActive(isSupportActive);
    setIsButtonActive(isButtonActive)
  }, []);

  // const promptWhatsAppWebLogin = () => {
  //   showPopup(
  //     "WhatsApp Web Login Required",
  //     "Please log in to your WhatsApp Web account to continue."
  //   );
  // };

  // const promptInstallPrimes = () => {
  //   const isMobile = isMobileDevice();
  //   showPopup(
  //     "Prime Sender Extension Not Installed",
  //     "To proceed, please install our browser extension and then try logging in again.",
  //     !isMobile
  //   );
  // };

  const handlePopups = useCallback((data) => {
    if (data.message === "User data not found.") {
      // promptInstallPrimes();
      if (isMobileDevice()) {
        showPopup(
          t('login.popups.mobileLoginError.headline'),
          t('login.popups.mobileLoginError.subheadline'),
          false,
          true
        );
      } else {
        showPopup(
          t('login.popups.premiumOnly.headline'),
          t('login.popups.premiumOnly.subheadline'),
          false,
          true
        );
      }
      return;
    }

    if (data === "Server error") {
      showPopup(
        t('login.popups.serverError.headline'),
        t('login.popups.serverError.subheadline')
      );
      return;
    }

    if (data.message === "Another email is already associated with the provided WhatsApp number.") {
      const userName = data.data.user_name;
      const maskedEmail = data.data.user_masked_email;
      let supportCount = parseInt(window.localStorage.getItem("support_count") || 0);

      if (supportCount < 2) {
        window.localStorage.setItem("support_count", supportCount + 1);
      }
      let isSecondOrMoreVisit = supportCount >= 1;

      showPopup(
        t('login.popups.emailMismatch.headline'),
        t('login.popups.emailMismatch.subheadline', { userName: userName ?? '', comma: userName ? ', ' : '', maskedEmail }),
        isSecondOrMoreVisit
      );      
      return;
    }
  }, [t, isMobileDevice, showPopup]);


  const returnToHomePage = () => {
    navigate("/")
  }

  useEffect(() => {
    const onSuccess = async (credentialResponse) => {
      setLoading(true)

      let whatsapp_number = window.localStorage.getItem("PRIMES::whatsapp_number");
      const requestBody = {
        authToken: credentialResponse.credential,
        phoneNumber: isCorrectWhatsappNum(whatsapp_number) ? whatsapp_number : ""
      }

      try {
        const data = await apiFetch(url, "POST", requestBody);

        let res = JSON.parse(data.body);
        setLoading(false);

        if (data.statusCode === 200) {

          ReactGA.event({
            category: "Google Login",
            action: "Google Login Successful",
            label: "google_login_success",
          });

          handleLogin(res.data.authToken, res.data.userData);
        } else {
          handlePopups(res);
        }
      } catch (error) {
        setLoading(false);

        ReactGA.event({
          category: "Google Login",
          action: "Google Login Unsuccessful",
          label: error.error || "Unknown Error",
        });

        handlePopups("Server error");
      }
    };
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(new URL(currentUrl).search);
    const transferValue = urlParams.get('transfer');

    if (transferValue === "true") {
      window.localStorage.setItem("PRIMES::Transfer", transferValue)
    }

    if (controller?.credentials?.cred !== undefined && controller?.credentials?.cred !== "") {
      navigate("/dashboard/profile")
    }

    const initializeGoogleSignIn = () => {
      if (typeof google === "undefined" || !google.accounts) {
        console.error("Google API not loaded.");
        return;
      }

      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_PROD_GOOGLE_CLIENT_ID,
        callback: onSuccess,
        auto_select: true,
        itp_support: true,
      });

      google.accounts.id.renderButton(
        document.getElementById("signInGoogle"),
        {
          type: "standard",
          size: "large",
          text: "signin_with",
          shape: "pill",
          logo_alignment: "left",
          click_listener: () => {
            ReactGA.event({
              category: "Google Login",
              action: "Google Login Button Clicked",
              label: "google_login_button",
            });

            console.log("Google Login button clicked");
          }
        }
      );
    };

    if (typeof google !== "undefined" && google.accounts) {
      initializeGoogleSignIn();
    } else {
      const scriptLoadInterval = setInterval(() => {
        if (typeof google !== "undefined" && google.accounts) {
          clearInterval(scriptLoadInterval);
          initializeGoogleSignIn();
        }
      }, 100);
    }
  }, [controller, navigate, url, handleLogin, handlePopups]);

  return (
    <div className="page">
      <div className={loading ? "loader active_loader" : "loader"}>
        <HashLoader
          color="#009a88"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className={isPopupActive ? "main blur_active" : "main"}>
        <div className="left-side">
          <div className="logo_box" onClick={returnToHomePage}>
            <img className="icon" src="/images/logo-img.png" alt={t('common.logoAlt')} />
            <img src="/images/logo-text.png" alt="Prime Sender" />
          </div>
          <div className="img_box">
            <h2>{t('login.leftSide.heading')}</h2>
            <hr />
            <img src="/images/login_image.png" alt={t('login.leftSide.imageAlt')} />
          </div>

        </div>
        <div className="right-side">
          <div className="main_box">
            <div className="intro_text">
              <h1>{t('login.rightSide.welcome')}</h1>
              <h3>{t('login.rightSide.subtitle')}</h3>
            </div>
            <div id="signInGoogle">
            </div>
            <div className="end_text">
              <hr />
              <h5>{t('login.rightSide.callToAction')}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={isPopupActive ? "popup_container active_popup" : "popup_container"}>
        <div className="popup_content">
          <IoClose className="cross_close" onClick={() => setIsPopupActive(false)} />
          <div className="headline">
            <CiWarning className="warning_icon" /><span>{headline}</span>
          </div>
          <div className="sub_headline" style={{ display: isSubHeadLine ? "block" : "none" }}>
            <span>{subHeadline}</span>
          </div>
          <div className={isSupportActive ? "customer_support active_support" : "customer_support"}>
            <span>{t('login.support.question')}</span><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=917058067789">{t('login.support.clickHere')}</a>
          </div>

          <div className={isButtonActive ? "button_div active_btn" : "button_div"}>
            <a target="_blank" rel="noreferrer" href="https://prime-sender.com/pricing/">{t('login.cta.purchaseNow')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
