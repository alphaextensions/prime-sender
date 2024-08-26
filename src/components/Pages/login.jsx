import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { primeSenderController, setCredentials } from "../context";
import "../../styles/login/login.css";

function Login() {
  const url = "https://pzx8ao8mk8.execute-api.eu-north-1.amazonaws.com/dev";
  const [controller, dispatch] = primeSenderController();
  const [headline, setHeadline] = useState("");
  const [subHeadline, setSubHeadline] = useState("");
  const [isSubHeadLine, setIsSubHeadLine] = useState(false)
  const [isPopupActive, setIsPopupActive] = useState(false)

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
    if (data.message === "User not exist") {
      setIsPopupActive(true)
      setHeadline("User Not Found");
      setSubHeadline("The email you entered does not match our records. Please check and try again.")
      setIsSubHeadLine(true)
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
            showPopups(res)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else {
      getWhatsappNum()
    }
  };

  useEffect(() => {
    !isWhatsappNumExist() && getWhatsappNum()
  }, [])

  return (
    <div className="page">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 style={{ margin: "10px 0px" }}>Sign in</h1>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                onSuccess(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
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
              {/* <button className="ghost" id="signUp">
                Sign Up
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className={isPopupActive ? "popup_container active_popup" : "popup_container"}>
        <div className="close_btn">
          <IoClose style={{ cursor: "pointer" }} onClick={() => setIsPopupActive(false)} />
        </div>
        <div className="popup_content">
          <div className="headline">
            <span>{headline}</span>
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
