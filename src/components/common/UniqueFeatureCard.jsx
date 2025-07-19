import "../../styles/HomePage/uniqueFeatures.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const UniqueFeatureCard = ({ imgSrc, slideIndex, order }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={order === 1 ? 'unique_card' : 'unique_card unique_card_reverse'}>
        <div className="unique_card_image" data-aos="fade-left" >
          <img src={imgSrc} alt="Feature icon" />
        </div>
        <div className="unique_card_text" data-aos="fade-right" >
          <p className="sub_title heading">{t(`uniqueFeatures.slides.${slideIndex}.subTitle`)}</p>
          <h1 className="large-heading">{t(`uniqueFeatures.slides.${slideIndex}.featureTitle`)}</h1>
          <p className="feature_content large-text">{t(`uniqueFeatures.slides.${slideIndex}.featureText`)}</p>
        </div>
      </div>
    </>
  )
}

UniqueFeatureCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  slideIndex: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired
};

export default UniqueFeatureCard
