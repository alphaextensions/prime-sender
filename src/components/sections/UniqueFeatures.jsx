import UniqueFeatureCard from "../common/UniqueFeatureCard";
import '../../styles/HomePage/uniqueFeatures.css'
import SectionTitle from "../common/SectionTitle";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const UniqueFeatures = () => {
  const [autoplaySlider, setAutoplaySlider] = useState(true);
  const { t } = useTranslation();
  return (
    <div className="unique_main">
      <SectionTitle
        gif="/gifs/unique-features.gif"
        title={t('uniqueFeatures.sectionTitle')}
        subtitle={t('uniqueFeatures.sectionSubtitle')}
      />
      <ScrollTrigger
        onEnter={() => setAutoplaySlider(true)}
        onExit={() => setAutoplaySlider(false)}
      >
        <Slider
          dots={true}
          arrows={true}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={autoplaySlider}
          autoplaySpeed={3000}
          speed={1000}
          rows={1}
          key={autoplaySlider}>
          <div className="unique_container">
            <div className="unique_features">
              <UniqueFeatureCard
                imgSrc={'/gifs/translate.gif'}
                order={1}
                slideIndex={0}
              />
            </div>
          </div>
          <div className="unique_container">
            <div className="unique_features">
              <UniqueFeatureCard
                imgSrc={'/gifs/save-customer-data.gif'}
                order={1}
                slideIndex={1}
              />
            </div>
          </div>
          <div className="unique_container">
            <div className="unique_features">
              <UniqueFeatureCard
                imgSrc={'/gifs/data-analysis.gif'}
                order={1}
                slideIndex={2}
              />
            </div>
          </div>
        </Slider>
      </ScrollTrigger>
    </div>
  );
};

export default UniqueFeatures;