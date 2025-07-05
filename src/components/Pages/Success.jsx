import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import '../../styles/SuccessPage/successPage.css';
import HelmetHeader from '../common/HelmetHeader';
import featuresList from '../Data/pricing-page-features-list';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { promoText } from '../Data/seo-data';

const Success = ({ plan }) => {
  const { t } = useTranslation();
  
  const successTitle = {
    basic: t('successPage.titles.basic'),
    advance: t('successPage.titles.advance')
  };
  
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => (
      <span key={index} className='white_promo_text pro'>{text}</span>
    ));
  };

  const promoTextComponent = (
    <div className='promo_text_container'>
      {promoTextComponentGenerator()}
    </div>
  );
  
  // Format plan name for display (capitalize first letter)
  const formattedPlan = plan[0].toUpperCase() + plan.substr(1);

  return (
    <>
      <HelmetHeader
        title={`${successTitle[plan]} | Prime Sender - Free AI Web Message Sender`}
        description={`${successTitle[plan]} for Prime Sender`}
      />
      <div className="main-section">
        {promoTextComponent}
        <div className="main-container success-page-container">
          <div className="success-texts-container">
            <p className="heading">
              {t('successPage.heading', { plan: formattedPlan })}
            </p>
            <p className="text">{t('successPage.description')}</p>
            <p className="sub-text">{t('successPage.subText')}</p>
          </div>
          <div className="features-list">
            <p className="heading">{t('successPage.featuresTitle')}</p>
            {featuresList.map((feature, index) => (
              <div className="feature" key={index}>
                <p className="text">{feature.name}</p>
                {feature[plan] ? (
                  <AiOutlineCheck className='check-icon large-text' />
                ) : (
                  <RxCross2 className='cross-icon large-text' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Success.propTypes = {
  plan: PropTypes.oneOf(['basic', 'advance']).isRequired
};

export default Success;