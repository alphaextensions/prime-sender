import React from "react";
import "../../styles/common/downloadbtn.css";
import ReactGA from "react-ga4";
import { trackConversion } from "../../utils/gtag";

const DownloadBtn = (props) => {
  const handleDownloadBtnClick = () => {
    ReactGA.event({
      category: "Button Click",
      action: "download now button click",
      label: "download_btn_clicked", // optional
    });

    // Track the conversion with Google Ads
    trackConversion();
    return;
  };

  return (
    <>
      <a
        className="button-round download-btn btn notranslate"
        href="https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
        target="_blank"
        onClick={handleDownloadBtnClick}
      >
        <p
          className={
            props.homeBtn === true
              ? "download-text large-text"
              : "download-text large-text"
          }
        >
          Free Download
        </p>
        {props.downloadIcon}
      </a>
    </>
  );
};

export default DownloadBtn;
