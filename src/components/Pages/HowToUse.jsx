import "../../styles/HomePage/howToUse.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from "react";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from 'react-i18next';
import HelmetHeader from "../common/HelmetHeader";

const HowToUse = () => {
  const { t } = useTranslation();
  const [showMetaData, setShowMetaData] = useState(false);
  useEffect(() => {
    AOS.init({duration: 1000});

    if(window.location.href?.includes('how-to-use'))
      setShowMetaData(true);
  }, [])

  return (
    <>
      {showMetaData &&
        <HelmetHeader
          title={'How To Use | Prime Sender - Free AI Web Message Sender'}
          description={'How to use page for Prime Sender, "Explore the future of messaging with our WhatsApp Sender Extension. Maximize productivity, enhance convenience, and simplify your communication tasks. Get started now!"'}
          keywords={'how to use , prime sender how to use, how to use prime sender, Simple, cheap, prime sender'}
        />
      }
    <div className="use_main">
      <SectionTitle id="how-to-use" gif="/images/lightbulb.png" title={t('howto.sectionTitle')} white/>
      <div className="use_container">
        {/* left container */}
        <div className="use_left" data-aos="fade-right" >
          <div className="use_left_bottom">
            <div className="use_features">
              <h3 className="heading">01</h3>
              <div className="use_feature_text">
                <h3 className="heading">{t('howto.steps.uploadTitle')}</h3>
                <p className="text">{t('howto.steps.uploadDesc')}</p>
              </div>
            </div>
            <div className="use_feature_divider" />
            <div className="use_features">
              <h3 className="heading">02</h3>
              <div className="use_feature_text">
                <h3 className="heading">{t('howto.steps.sendTitle')}</h3>
                <p className="text">
                  {t('howto.steps.sendDesc1')}
                </p>
                <p className="text">
                  {t('howto.steps.sendDesc2')}
                </p>
                <p className="text">
                  {t('howto.steps.sendDesc3')}
                </p>
                <p className="text">
                  {t('howto.steps.sendDesc4')}
                </p>
                <p className="text">{t('howto.steps.sendDesc5')}</p>
              </div>
            </div>
            <div className="use_feature_divider" />
            <div className="use_features">
              <h3 className="heading">03</h3>
              <div className="use_feature_text">
                <h3 className="heading">{t('howto.steps.downloadTitle')}</h3>
                <p className="text">
                  {t('howto.steps.downloadDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right container */}
        <div className="use_right" data-aos="flip-right" >
          <div className="use_right_container">
            <img src={t('howto.howtoimg')} alt="How to use" />
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default HowToUse;
