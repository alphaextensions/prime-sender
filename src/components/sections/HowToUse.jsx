import "../../styles/HomePage/howToUse.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const HowToUse = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <div className="use_main" id="how-to-use">
      <div className="use_heading">
        <img className="lightbulb" src="/images/lightbulb.png" alt="" />
        <h1 className="heading">How To Use</h1>
      </div>
      <div className="use_container">
        {/* left container */}
        <div className="use_left" data-aos="fade-right" >
          <div className="use_left_bottom">
            <div className="use_features">
              <h3>01</h3>
              <div className="use_feature_text">
                <h3>Upload</h3>
                <p>
                  Enter the numbers you want to send the message to, separated by comma.
                </p>
              </div>
            </div>
            <div className="use_feature_divider" />
            <div className="use_features">
              <h3>02</h3>
              <div className="use_feature_text">
                <h3>Send Message</h3>
                <p>
                  Enter the message you'd like to send. You could also add
                  attachments 📁
                </p>
                <p>
                  1. Click on the icon of 📎 Attachment inside the text box
                  inside the extension
                </p>
                <p>
                  2. Select files youd like to send. You can select multiple
                </p>
                <p>
                  3. You can click on Add Caption to add caption to your
                  attachment
                </p>
                <p>4. Click on Send button inside the extension</p>
              </div>
            </div>
            <div className="use_feature_divider" />
            <div className="use_features">
              <h3>03</h3>
              <div className="use_feature_text">
                <h3>Download Report</h3>
                <p>
                  Download the delivery report by clicking on Delivery Report to view the delivery status of the messages and the attachment
                  sent.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right container */}
        <div className="use_right" data-aos="flip-right" >
          <div className="use_right_container">
            <img src="/images/how-to-use.jpg" alt="How to use" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
