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
        subtitle="Connect with all your customers instantly and efficiently"
      />
      <div className="solutions_container">
        <div className="solutions_lower" data-aos="fade-up">
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/images/trust1.gif"  />
              <h1 className="heading">Highly Trusted</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">More then 50,000 businesses trust us to connect with their customers</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/images/interface.gif" alt="" />
              <h1 className="heading">Friendly Interface</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">The design is fairly intuitive and easy to understand</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/images/price.gif" alt="" />
              <h1 className="heading">Lowest Prices</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">Apart from a few features available in  lowest prices, other features are completely free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSolutions;