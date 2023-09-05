import "../../styles/HomePage/testimonial.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6' 

const Testimonial = () => {

  const [counter,setCounter] = useState(true);
  const [counterOn,setCounterOn] = useState(false);

  return (
    <div className="testimonial_main">
      <div className="testimonial_container">
        <div className="testimonial_upper">
          <h1>Our Numbers Speak For Themselves</h1>
          <div className="testimonial_stats">
            <div className="testimonial_rating">
              <h1>
                4.6<span style={{ color: "#47CFFF" }}> / </span>5
              </h1>
              <p>User Ratings</p>
            </div>
            <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false),setCounter(false)}}>
              <div className="testimonial_users">
                <h1>
                {counter && counterOn && <span><CountUp end={55} /><span style={{ color: "#FFB545" }}>K</span>+</span>}
                {
                  !counter && <span>55<span style={{ color: "#FFB545" }}>K</span>+</span>
                }
                </h1>
                <p>Users</p>
              </div>
            </ScrollTrigger>
            <div className="testimonial_rank">
              <h1>
                Rank <span style={{ color: "#47DD56" }}>1</span>
              </h1>
              <p>Sender on Web Store</p>
            </div>
          </div>
        </div>
        <div className="testimonial_line_break" />
        <div className="testimonial_lower">
          <div id="testimonial">
          <div className="testimonial_title">
            <img src="/images/customer-img.png" alt="" />
            <h1 className="heading">What Customers Are Saying</h1>
          </div>
          <div className="testimonial_cards">
            <div className="testimonial_left">
                <div className="testimonial_card">
                  <h2><span className="quotation_mark">❛❛ </span>This is crazy</h2>
                  <p className="customer_review" > The Best Application, Really Helps my work, the application is simple, easy to use, admin respond quickly when tere are problems. the monthly subscription fee is affordable, thank you prime sender team. </p>
                  <div className="customer_info">
                    <div className="customer_img">
                      <img src="./images/user1.jpg" alt="user1" />
                    </div>
                    <div className="customer_name">
                      <h4>EKO WICAKSONO</h4>
                      <p>Internet Surfer</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="testimonial_right">
              <div className="testimonial_right_upper">
                <div className="testimonial_card">
                  <h2><span className="quotation_mark">❛❛ </span>Very Helpful</h2>
                  <p className="customer_review" > I Run a Small Business in Indonesia and this Helped me a Lot to get new Customers. Not Many Chrome Extensions are Useful but This one is Very Good, Thank You!</p>
                  <div className="customer_info">
                    <div className="customer_img">
                      <img src="./images/user3.jpg" alt="user1" />
                    </div>
                    <div className="customer_name">
                      <h4>David</h4>
                      <p>Businessmen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_right_lower">
                <div className="testimonial_card">
                  <h2><span className="quotation_mark">❛❛ </span>Amazing</h2>
                  <p className="customer_review" > Very Easy to Understand and Use, Not Like other "software" Complicated. and What Surprise me is, during Operate, I Would Like To Know More, WA to their Support Team, get reply Very Quick. </p>
                  <div className="customer_info">
                    <div className="customer_img">
                      <img src="./images/user2.jpg" alt="user1" />
                    </div>
                    <div className="customer_name">
                      <h4>Joel Peterson</h4>
                      <p>Software Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="view-more">
        <a href="https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia/reviews?hl=en" target="_blank" className="button-round view-more-btn"><span>View More</span> <FaArrowRightLong/></a>
      </div>
    </div>
  );
};

export default Testimonial;
