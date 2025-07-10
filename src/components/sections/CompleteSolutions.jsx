import "../../styles/HomePage/completeSolutions.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from 'react-i18next';

const CompleteSolutions = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="solutions_main">
      <SectionTitle 
        gif="/gifs/complete-solutions.gif" 
        title={t('solutions.sectionTitle')} 
        subtitle={t('solutions.sectionSubtitle')}
      />
      <div className="solutions_container">
        <div className="solutions_lower" data-aos="fade-up">
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/gifs/trust1.gif" alt="GIF" />
              <h1 className="heading">{t('solutions.cards.trustedTitle')}</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">{t('solutions.cards.trustedDesc')}</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/gifs/interface.gif" alt="GIF" />
              <h1 className="heading">{t('solutions.cards.interfaceTitle')}</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">{t('solutions.cards.interfaceDesc')}</p>
            </div>
          </div>{" "}
          <div className="solutions_card">
            <div className="solutions_card_upper">
              <img src="/gifs/price.gif" alt="GIF" />
              <h1 className="heading">{t('solutions.cards.freeTitle')}</h1>
            </div>
            <div className="solutions_card_lower">
              <p className="text">{t('solutions.cards.freeDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSolutions;