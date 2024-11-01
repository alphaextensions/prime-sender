import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { primeSenderController, setCredentials } from "../context";
import "../../styles/login/login.css";
import theme from "@material-tailwind/react/theme";

function Login() {
  const [controller, dispatch] = primeSenderController();
  const [headline, setHeadline] = useState("");
  const [subHeadline, setSubHeadline] = useState("");
  const [isSubHeadLine, setIsSubHeadLine] = useState(false)
  const [isPopupActive, setIsPopupActive] = useState(false)
  const url = import.meta.env.VITE_PROD_LOGIN_API;

  const navigate = useNavigate();

  const handleLogin = (cred, data) => {
    setCredentials(dispatch, { cred, data });
    navigate("/dashboard/profile")
  };

  const isWhatsappNumExist = () => {
    return (window.localStorage.getItem("whatsapp_number") ? true : false)
  }
  const getWhatsappNum = () => {
    setIsPopupActive(true)
    setHeadline("First time login")
    setIsSubHeadLine(true)
    setSubHeadline("If this is your first time logging in, please ensure you do so from a desktop or laptop where the Prime Sender extension is installed. This will help ensure that all necessary features are properly activated. Thank you for your cooperation.")
  }

  const showPopups = (data) => {
    if (data.message === "User data not found.") {
      setIsPopupActive(true)
      setHeadline("User Not Found");
      setIsSubHeadLine(true)
      setSubHeadline("The email you selected does not match our records. Please check and try again.")
    }
    if (data === "Server error") {
      setIsPopupActive(true)
      setHeadline("Server Error");
      setIsSubHeadLine(true)
      setSubHeadline("There is some server issue please try again later.")
    }
    if (data.message === "Another email is already associated with the provided whatsapp number.") {
      setIsPopupActive(true)
      setHeadline("WhatsApp Number Already Linked");
      setIsSubHeadLine(true)
      setSubHeadline("This WhatsApp number is already associated with an existing email account. Please use a different number or email.")
    }
    if (data.message === "WhatsApp number is required.") {
      setIsPopupActive(true);
      setHeadline("WhatsApp Number Verification Needed");
      setIsSubHeadLine(true);
      setSubHeadline("Please install our extension on this device to proceed with login.");
    }
  }

  const onSuccess = (credentialResponse) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      authToken: credentialResponse.credential,
      phoneNumber: window.localStorage.getItem("whatsapp_number"),
    });

    if (isWhatsappNumExist()) {
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

          if (data.statusCode === 400) {
            showPopups(res);
          }
        })
        .catch((error) => {
          console.error(error);
          showPopups("Server error")
        });
    } else {
      getWhatsappNum();
    }
  };

  useEffect(() => {
    if (controller?.credentials?.cred !== undefined && controller?.credentials?.cred !== "") {
      navigate("/dashboard/profile")
    }
  }, [controller, navigate]);


  useEffect(() => {
    !isWhatsappNumExist() && getWhatsappNum()

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
        theme: "outline",
        size: "large",
        text: "continue_with",
        logo_alignment: "left"
      }
    );

  }, [])


  return (
    <div className="page">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 style={{ margin: "10px 0px" }}>Sign in</h1>
            <div id="signInGoogle">

            </div>
            <span style={{ margin: "10px 0px" }}>
              use your google account to Sign - In
            </span>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h2>Prerequisite for sign-in via Google</h2>
              <li>
                Ensure you installed prime-sender extension in the current
                browser from which you try to login.{" "}
              </li>
              <li>
                Ensure you logged in the whatsapp web which account you want to
                login{" "}
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className={isPopupActive ? "popup_container active_popup" : "popup_container"}>

        <div className="popup_content">
          <div className="headline">
            <span>{headline}</span>
            <IoClose style={{ cursor: "pointer", fontSize: "22px" }} onClick={() => setIsPopupActive(false)} />
          </div>
          <div className="sub_headline" style={{ display: isSubHeadLine ? "block" : "none" }}>
            <span>{subHeadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
