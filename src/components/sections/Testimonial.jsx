import "../../styles/HomePage/testimonial.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6' 
import SectionTitle from "../Common/SectionTitle";
import ReactGA from "react-ga4";
import TestimonialCard from "../common/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {

  const [counter,setCounter] = useState(true);
  const [counterOn,setCounterOn] = useState(false);

  const handleViewMoreBtnClick = () => {
    ReactGA.event({
      category: "Button Click",
      action: "view more button click",
      label: "view_more_btn_clicked",
    });
    return;
  }

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
          <SectionTitle id="testimonial" gif="/gifs/testimonials-2.gif" title="What Customers Are Saying" white />
          <div className="testimonial_cards_div">
            <ScrollTrigger>
              <Slider
                dots={true}
                arrows={true}
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={false}
                autoplaySpeed={5000}
                speed={1000}
                >
                <div className="testimonial_cards_div">
                  <div className="testimonial_cards">
                    <div className="testimonial_left">
                      <div className="testimonial_card">
                        <TestimonialCard
                          heading={'This is crazy'}
                          review={'The best application, really helps my work, the application is simple, easy to use, admin respond quickly when tere are problems. the monthly subscription fee is affordable, thank you Prime Sender team.'}
                          imgSrc={'/images/user1.jpg'}
                          customerName={'EKO WICAKSONO'}
                        />
                      </div>
                    </div>
                    <div className="testimonial_right">
                      <div className="testimonial_right_upper">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={'Very Helpful'}
                            review={'I run a small business in Indonesia and this helped me a lot to get new customers. Not many chrome extensions are useful but this one is very good, Thank You!'}
                            imgSrc={'/images/user2.jpg'}
                            customerName={'David'}
                          />
                        </div>
                      </div>
                      <div className="testimonial_right_lower">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={'Amazing'}
                            review={'Very easy to understand and use, not like other "software" complicated. and what surprise me is, during operate, I would like to know more, WA to their support team, get reply very quick.'}
                            imgSrc={'/images/user3.jpg'}
                            customerName={'Joel Peterson'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_cards_div">
                  <div className="testimonial_cards testimonial_cards_second">
                    <div className="testimonial_right">
                      <div className="testimonial_right_upper">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={'Highly Recommended!'}
                            review={'So far, seems to be completely free. You can send a bulk message to hundreds of contacts very easily and quickly. Saves a ton of time!! Especially the function for importing contacts from a spreadsheet.'}
                            imgSrc={'/images/user4.jpg'}
                            customerName={'Phillipe Kenny'}
                          />
                        </div>
                      </div>
                      <div className="testimonial_right_lower">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={'Thanks Prime Sender!'}
                            review={'This extension is helping our company a lot to get in touch with many leads. Really helpful in mass messaging and offers announcement overall it is a perfect tool for mass sending messages i love it'}
                            imgSrc={'/images/user5.jpg'}
                            customerName={'Alexandre Farias'}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_left">
                      <div className="testimonial_card">
                        <TestimonialCard
                          heading={'Thank you alpha'}
                          review={'Premium features is great,the admin is very helpful,emails get responds within 24hrs. Adjustment request was done within few hours after sending in an email to alpha extensions.'}
                          imgSrc={'/images/user6.jpg'}
                          customerName={'Danush Rao'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </ScrollTrigger>
          </div>
        </div>
      </div>
      <div className="view-more">
        <a href="https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia/reviews?hl=en" target="_blank" className="button-round view-more-btn" onClick={handleViewMoreBtnClick}><span>View All</span> <FaArrowRightLong/></a>
      </div>
    </div>
  );
};

export default Testimonial;