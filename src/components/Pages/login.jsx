import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { primeSenderController, setCredentials } from "../context";
import "../../styles/login/login.css";


function Login() {
  const [controller, dispatch] = primeSenderController();
  const [headline, setHeadline] = useState("");
  const [subHeadline, setSubHeadline] = useState("");
  const [isSubHeadLine, setIsSubHeadLine] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [isPopupActive, setIsPopupActive] = useState(false)
  const url = import.meta.env.VITE_PROD_LOGIN_API;

  const navigate = useNavigate();

  const handleLogin = (cred, data) => {
    setCredentials(dispatch, { cred, data });
    navigate("/dashboard/profile")
  };

  // const isWhatsappNumExist = () => {
  //   return (window.localStorage.getItem("whatsapp_number") ? true : false)
  // }

  const isCorrectWhatsappNum = () => {
    let whatsapp_number = parseInt(window.localStorage.getItem("whatsapp_number"));
    return !isNaN(whatsapp_number);
  }

  const isMobileDevice = () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUserAgent = /mobile|android|iphone|ipad|tablet/.test(userAgent);

    if (isTouchDevice && isMobileUserAgent) {
      return true;
    } else {
      return false;
    }
  }

  const showPopup = (headline, subHeadline, isButtonActive = false) => {
    setIsPopupActive(true);
    setIsSubHeadLine(Boolean(subHeadline));
    setHeadline(headline);
    setSubHeadline(subHeadline || "");
    setIsButtonActive(isButtonActive);
  };

  // const promptWhatsAppWebLogin = () => {
  //   showPopup(
  //     "WhatsApp Web Login Required",
  //     "Please log in to your WhatsApp Web account to continue."
  //   );
  // };

  const promptInstallPrimes = () => {
    const isMobile = isMobileDevice();
    showPopup(
      "Prime Sender Extension Not Installed",
      "To proceed, please install our browser extension and then try logging in again.",
      !isMobile
    );
  };

  const handlePopups = (data) => {
    if (data.message === "User data not found.") {
      promptInstallPrimes();
      return;
    }

    if (data === "Server error") {
      showPopup(
        "Internal Server Error",
        "An issue occurred on our end. Please try again later."
      );
      return;
    }

    if (data.message === "Another email is already associated with the provided WhatsApp number.") {
      const userName = data.data.user_name;
      const maskedEmail = data.data.user_masked_email;
      showPopup(
        "Email ID Already Linked",
        `Hi ${userName ?? ''}${userName ? ', ' : ''}this email is already linked with an account registered using ${maskedEmail}. Please check your extension profile for the registered email ID.`
      );
      return;
    }
  };


  const onSuccess = (credentialResponse) => {
    const headers = {
      "Content-Type": "application/json",
    };

    let phoneNumber = window.localStorage.getItem("whatsapp_number");

    const body = JSON.stringify({
      authToken: credentialResponse.credential,
      phoneNumber: isCorrectWhatsappNum(phoneNumber) ? phoneNumber : "",
    });

    fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        let res = JSON.parse(data.body);
        if (data.statusCode === 200) {
          handleLogin(res.data.authToken, res.data.userData);
        }

        if (data.statusCode !== 200) {
          handlePopups(res);
        }
      })
      .catch((error) => {
        console.error(error);
        handlePopups("Server error")
      });


  };

  const returnToHomePage = () => {
    navigate("/")
  }

  useEffect(() => {
    if (controller?.credentials?.cred !== undefined && controller?.credentials?.cred !== "") {
      navigate("/dashboard/profile")
    }
  }, [controller, navigate]);


  useEffect(() => {

    /* global variable google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_PROD_GOOGLE_CLIENT_ID,
      callback: onSuccess,
      auto_select: true,
      itp_support: true
    });

    google.accounts.id.renderButton(
      document.getElementById("signInGoogle"),
      {
        type: "standard",
        size: "large",
        text: "signin_with",
        shape: "pill",
        logo_alignment: "left"
      }
    );

  }, [])


  return (
    <div className="page">
      <div className={isPopupActive ? "main blur_active" : "main"}>
        <div className="left-side">
          <div className="logo_box" onClick={returnToHomePage}>
            <img className="icon" src="/images/logo-img.png" alt="logo" />
            <img src="/images/logo-text.png" alt="Prime Sender" />
          </div>
          <div className="img_box">
            <h2>Reach Your Audience on WhatsApp with Precision</h2>
            <hr />
            <img src="/images/login_image.png" alt="" />
          </div>

        </div>
        <div className="right-side">
          <div className="main_box">
            <div className="intro_text">
              <h1>Welcome!</h1>
              <h3>Let's Make WhatsApp Work Smarter for You with Prime Sender.</h3>
            </div>
            <div id="signInGoogle">
            </div>
            <div className="end_text">
              <hr />
              <h5>Log In to Connect, Engage, and Grow!</h5>
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
          <div className={isButtonActive ? "button_div active_btn" : "button_div"}>
            <a target="_blank" href="https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia">Download Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
