import UniqueFeatureCard from "../Common/UniqueFeatureCard";
import '../../styles/HomePage/uniqueFeatures.css'
import SectionTitle from "../Common/SectionTitle";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";

const UniqueFeatures = () => {
  const [autoplaySlider, setAutoplaySlider] = useState(true);
  return (
    <div className="unique_main">
      <SectionTitle
        gif="/gifs/unique-features.gif"
        title="Unique Features"
        subtitle="Features that optimize your productivity and communication with customers"
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
                subTitle={'Available in Your regional language'}
                featureTitle={'Easily Translate chats with customers and features inside the chrome extension'}
                featureText={`With single click users can translate messages received from customers and understand it in their regional language. No need to open Google translate every time you receive a message from a different language. The features inside the extension are also available in your regional language.`}
              />
            </div>
          </div>
          <div className="unique_container">
            <div className="unique_features">
              <UniqueFeatureCard
                imgSrc={'/gifs/save-customer-data.gif'}
                order={1}
                subTitle={'Save Campaigns'}
                featureTitle={`Save your customer details in a single click`}
                featureText={`Improve your messaging experience. No need to upload the same Excel again or copy paste customers number again, with the save campaign feature you can save campaigns and reuse them again quickly as needed.`}
              />
            </div>
          </div>
          <div className="unique_container">
            <div className="unique_features">
              <UniqueFeatureCard
                imgSrc={'/gifs/data-analysis.gif'}
                order={1}
                subTitle={'Invoice, Report and analysis'}
                featureTitle={'Get details of your past activities'}
                featureText={`You can download reports of previous campaigns and check your usage of premium features. You can also get receipt of your monthly invoice in a single click.`}
              />
            </div>
          </div>
        </Slider>
      </ScrollTrigger>
    </div>
  );
};

export default UniqueFeatures;