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
        title="Supercharge your communication for your business" 
        subtitle="Unlock maximum efficiency using our web sender extension. Connect with all your customers instantly and efficiently"
      />
      <div className="solutions_container">
        <div className="solutions_lower" data-aos="fade-up">
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/gifs/trust1.gif" alt="GIF" />
              <h1 className="heading">Highly Trusted</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">More than 50,000 businesses use our chrome extension to connect with their customers</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/gifs/interface.gif" alt="GIF" />
              <h1 className="heading">Friendly Interface</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">Our web sender has an intuitive design to optimize your productivity</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/gifs/price.gif" alt="GIF" />
              <h1 className="heading">Free to use</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">Our web sender chrome extension has basic features which are completely free to use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSolutions;