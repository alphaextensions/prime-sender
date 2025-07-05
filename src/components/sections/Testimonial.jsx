import "../../styles/HomePage/testimonial.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6' 
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";
import TestimonialCard from "../common/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
  const { t } = useTranslation();

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
          <SectionTitle gif="/gifs/testimonials-1.gif" title={t('testimonial.numbersTitle')} white/>
          <div className="testimonial_stats">
            <div className="testimonial_rating">
              <h1 className="large-heading">
                4.7<span style={{ color: "#47CFFF" }}> / </span>5
              </h1>
              <p className="large-text">{t('testimonial.userRatings')}</p>
            </div>
            <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false),setCounter(false)}}>
              <div className="testimonial_users">
                <h1 className="large-heading">
                {counter && counterOn && <span><CountUp end={100} /><span style={{ color: "#FFB545" }}>K</span>+</span>}
                {
                  !counter && <span>100<span style={{ color: "#FFB545" }}>K</span>+</span>
                }
                </h1>
                <p className="large-text">{t('testimonial.users')}</p>
              </div>
            </ScrollTrigger>
            <div className="testimonial_rank">
              <h1 className="large-heading">
                {t('testimonial.rank')} <span style={{ color: "#47DD56" }}>1</span>
              </h1>
              <p className="large-text">{t('testimonial.rankText')}</p>
            </div>
          </div>
        </div>
        <div className="testimonial_line_break" />
        <div className="testimonial_lower">
          <SectionTitle id="testimonial" gif="/gifs/testimonials-2.gif" title={t('testimonial.customersTitle')} white />
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
                          heading={t('testimonial.reviews.r1.heading')}
                          review={t('testimonial.reviews.r1.review')}
                          imgSrc={'/images/user1.jpg'}
                          customerName={t('testimonial.reviews.r1.name')}
                        />
                      </div>
                    </div>
                    <div className="testimonial_right">
                      <div className="testimonial_right_upper">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={t('testimonial.reviews.r2.heading')}
                            review={t('testimonial.reviews.r2.review')}
                            imgSrc={'/images/user2.jpg'}
                            customerName={t('testimonial.reviews.r2.name')}
                          />
                        </div>
                      </div>
                      <div className="testimonial_right_lower">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={t('testimonial.reviews.r3.heading')}
                            review={t('testimonial.reviews.r3.review')}
                            imgSrc={'/images/user3.jpg'}
                            customerName={t('testimonial.reviews.r3.name')}
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
                            heading={t('testimonial.reviews.r4.heading')}
                            review={t('testimonial.reviews.r4.review')}
                            imgSrc={'/images/user4.jpg'}
                            customerName={t('testimonial.reviews.r4.name')}
                          />
                        </div>
                      </div>
                      <div className="testimonial_right_lower">
                        <div className="testimonial_card">
                          <TestimonialCard
                            heading={t('testimonial.reviews.r5.heading')}
                            review={t('testimonial.reviews.r5.review')}
                            imgSrc={'/images/user5.jpg'}
                            customerName={t('testimonial.reviews.r5.name')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_left">
                      <div className="testimonial_card">
                        <TestimonialCard
                          heading={t('testimonial.reviews.r6.heading')}
                          review={t('testimonial.reviews.r6.review')}
                          imgSrc={'/images/user6.jpg'}
                          customerName={t('testimonial.reviews.r6.name')}
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
        <a href="https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia/reviews?hl=en" target="_blank" rel="noreferrer" className="button-round view-more-btn" onClick={handleViewMoreBtnClick}><span>{t('testimonial.viewAll')}</span> <FaArrowRightLong/></a>
      </div>
    </div>
  );
};

export default Testimonial;
