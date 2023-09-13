import "../../styles/HomePage/testimonial.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6' 
import SectionTitle from "../Common/SectionTitle";

const Testimonial = () => {

  const [counter,setCounter] = useState(true);
  const [counterOn,setCounterOn] = useState(false);

  return (
    <div className="testimonial_main">
      <div className="testimonial_container">
        <div className="testimonial_upper">
          <SectionTitle gif="/gifs/testimonials-1.gif" title="Our Numbers Speak For Themselves" white/>
          <div className="testimonial_stats">
            <div className="testimonial_rating">
              <h1 className="large-heading">
                4.6<span style={{ color: "#47CFFF" }}> / </span>5
              </h1>
              <p className="large-text">User Ratings</p>
            </div>
            <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false),setCounter(false)}}>
              <div className="testimonial_users">
                <h1 className="large-heading">
                {counter && counterOn && <span><CountUp end={55} /><span style={{ color: "#FFB545" }}>K</span>+</span>}
                {
                  !counter && <span>55<span style={{ color: "#FFB545" }}>K</span>+</span>
                }
                </h1>
                <p className="large-text">Users</p>
              </div>
            </ScrollTrigger>
            <div className="testimonial_rank">
              <h1 className="large-heading">
                Rank <span style={{ color: "#47DD56" }}>1</span>
              </h1>
              <p className="large-text">Sender on Web Store</p>
            </div>
          </div>
        </div>
        <div className="testimonial_line_break" />
        <div className="testimonial_lower">
          <SectionTitle id="testimonial" gif="/gifs/testimonials-2.gif" title="What Customers Are Saying" white/>
          <div className="testimonial_cards">
            <div className="testimonial_left">
                <div className="testimonial_card">
                  <h2 className="heading"><span className="quotation_mark">❛❛ </span>This is crazy</h2>
                  <p className="customer_review text" > The best application, really helps my work, the application is simple, easy to use, admin respond quickly when tere are problems. the monthly subscription fee is affordable, thank you Prime Sender team. </p>
                  <div className="customer_info">
                    <div className="customer_img">
                      <img src="/images/user1.jpg" alt="user1" />
                    </div>
                    <div className="customer_name">
                      <h4 className="sub-heading">EKO WICAKSONO</h4>
                    </div>
                  </div>
                </div>
            </div>
            <div className="testimonial_right">
              <div className="testimonial_right_upper">
                <div className="testimonial_card">
                  <h2 className="heading"><span className="quotation_mark">❛❛ </span>Very Helpful</h2>
                  <p className="customer_review text" > I run a small business in Indonesia and this helped me a lot to get new customers. Not many chrome extensions are useful but this one is very good, Thank You!</p>
                  <div className="customer_info">
                    <div className="customer_img">
                      <img src="/images/user2.jpg" alt="user1" />
                    </div>
                    <div className="customer_name">
                      <h4 className="sub-heading">David</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_right_lower">
                <div className="testimonial_card">
                  <h2 className="heading"><span className="quotation_mark">❛❛ </span>Amazing</h2>
                  <p className="customer_review text" > Very easy to understand and use, not like other "software" complicated. and what surprise me is, during operate, I would like to know more, WA to their support team, get reply very quick. </p>
                  <div className="customer_info">
                    <div className="customer_img">
                      <img src="/images/user3.jpg" alt="user1" />
                    </div>
                    <div className="customer_name">
                      <h4 className="sub-heading">Joel Peterson</h4>
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
