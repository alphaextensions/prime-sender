import { useTranslation } from 'react-i18next';
import '../../styles/PrivacyPolicyPage/privacyPolicy.css';
import SectionTitle from "../common/SectionTitle";
import HelmetHeader from "../common/HelmetHeader";
import { promoText } from '../Data/seo-data.js';

function PrivacyPolicy() {
  const { t } = useTranslation();
  
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = (
    <div className='promo_text_container'>
      {promoTextComponentGenerator()}
    </div>
  )
  
  return (
    <>
      <HelmetHeader
        title={`${t('privacyPolicy.title')} | Prime Sender - Free AI Web Message Sender`}
        description={t('privacyPolicy.title')}
        keywords={'prime sender privacy policy, privacy policy, privacy policy and terms&conditions'}
      />
      <div className="main-section privacy-policy">
        {promoTextComponent}
        <SectionTitle gif="/gifs/privacy-policy.gif" title={t('privacyPolicy.title')} />    
        <div className="main-container policy-container">
          {/* Safety Section */}
          <div className="policy">
            <h2 className="policy-title sub-heading">{t('privacyPolicy.safety.title')}</h2>
            <div className="policy-content text">
              <p>{t('privacyPolicy.safety.content')}</p>
            </div>
          </div>
          
          {/* Data Sharing Section */}
          <div className="policy">
            <h2 className="policy-title sub-heading">{t('privacyPolicy.dataSharing.title')}</h2>
            <div className="policy-content text">
              <ul>
                {t('privacyPolicy.dataSharing.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Conversations Section */}
          <div className="policy">
            <h2 className="policy-title sub-heading">{t('privacyPolicy.conversations.title')}</h2>
            <div className="policy-content text">
              <p>{t('privacyPolicy.conversations.content')}</p>
            </div>
          </div>
          
          {/* Data Collection Section */}
          <div className="policy">
            <h2 className="policy-title sub-heading">{t('privacyPolicy.dataCollection.title')}</h2>
            <div className="policy-content text">
              <p>{t('privacyPolicy.dataCollection.content')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
