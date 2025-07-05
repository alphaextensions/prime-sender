import { useTranslation } from 'react-i18next';
import HelmetHeader from "../common/HelmetHeader";
import SectionTitle from "../common/SectionTitle";
import { promoText } from "../Data/seo-data";

const RequestFeature = () => {
  const { t } = useTranslation();
  
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => (
      <span key={index} className='white_promo_text pro'>{text}</span>
    ));
  }

  const promoTextComponent = (
    <div className='promo_text_container'>
      {promoTextComponentGenerator()}
    </div>
  );

  return (
    <>
      <HelmetHeader
        title={`${t('featureRequest.title')} | Prime Sender - Free AI Web Message Sender`}
        description={t('featureRequest.description')}
        keywords={t('featureRequest.keywords')}
      />
      <div className="main-section">
        {promoTextComponent}
        <SectionTitle 
          gif="/gifs/feature-request.gif" 
          title={t('featureRequest.title')} 
        />
        <div className='main-container request_feature_container'>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScexPaMhkIuM4j_8qo1FRA40BUatLfeGZVD_SKF9Gcbgla1fw/viewform?embedded=true"
            height={1000}
            className='main-iframe'
            title={t('featureRequest.title')}
          >
            {t('featureRequest.loading')}
          </iframe>
        </div>
      </div>
    </>
  );
};

export default RequestFeature;
