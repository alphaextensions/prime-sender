import "../../styles/HomePage/completeSolutions.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import SectionTitle from "../Common/SectionTitle";

const CompleteSolutions = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="solutions_main">
      <SectionTitle 
        gif="/gifs/complete-solutions.gif" 
        title="Complete Marketing Solutions" 
        subtitle="Connect With All Your Customers Instantly And Efficiently"
      />
      <div className="solutions_container">
        <div className="solutions_lower" data-aos="fade-up">
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/images/trust1.gif"  />
              <h1 className="heading">Highly Trusted</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="large-text">More Then 50,000 Businesses Trust Us To Connect With Their Customers</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/images/interface.gif" alt="" />
              <h1 className="heading">Friendly Interface</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="large-text">The Design Is Fairly Intuitive And Easy To Understand</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/images/price.gif" alt="" />
              <h1 className="heading">Lowest Prices</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="large-text">Apart From a Few Features Available In  Lowest Prices, Other Features Are Completely Free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSolutions;