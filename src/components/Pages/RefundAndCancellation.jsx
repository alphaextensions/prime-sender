import { useTranslation } from 'react-i18next';
import '../../styles/PrivacyPolicyPage/privacyPolicy.css';
import SectionTitle from "../common/SectionTitle";
import HelmetHeader from "../common/HelmetHeader";
import { promoText } from '../Data/seo-data.js';

function RefundAndCancellation() {
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
                title={`${t('refundPolicyPage.title')} | Prime Sender - Free AI Web Message Sender`}
                description={t('refundPolicyPage.title')}
                keywords={'prime sender refund policy, refund policy, refund policy and cancellation'}
            />
            <div className="main-section privacy-policy">
                {promoTextComponent}
                <SectionTitle gif="/images/refund.png" title={t('refundPolicyPage.title')} />
                <div className="main-container policy-container">
                    <div className="policy">
                        <h2 className="policy-title sub-heading">{t('refundPolicyPage.shippingRefundTitle')}</h2>
                        <div className="policy-content text">
                            {t('refundPolicyPage.content', { returnObjects: true }).map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RefundAndCancellation;
