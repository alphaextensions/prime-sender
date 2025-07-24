import { useTranslation } from 'react-i18next';
import '../../styles/TermsOfUsePage/termsOfUse.css';
import SectionTitle from "../common/SectionTitle";
import HelmetHeader from '../common/HelmetHeader';
import { promoText } from '../Data/seo-data';

function TermsOfUse() {
  const { t } = useTranslation();
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {promoTextComponentGenerator()}
  </div>
  return (
    <>
      <HelmetHeader 
        title={'Terms Of Service | Prime Sender - Free AI Web Message Sender'}
        description={'Terms Of Service for Prime Sender'}
        keywords={'prime sender terms of use, terms and conditions, privacy policy and terms&conditions'}
      />
      <div className="terms-of-use main-section">
        {promoTextComponent}
        <SectionTitle gif="/gifs/terms-of-service.gif" title={t('termsOfUse.title', 'Terms of Service')} />
        <div className="terms-container main-container">
          <div className='term'>
            <p className="term-content text">{t('termsOfUse.intro')}</p>
          </div>

          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.userEligibility.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.userEligibility.content') }}
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.scopeOfTerms.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.scopeOfTerms.content') }}
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.modifications.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.modifications.content') }}
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.licenseAndOwnership.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.licenseAndOwnership.content') }}
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.restrictions.title')}</div>
            <div className="term-content text">
              <ul>
                {t('termsOfUse.restrictions.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.links.title')}</div>
            <div className="term-content text">
              <div className="mb-4">
                <h4 className="font-semibold mb-2">{t('termsOfUse.links.outbound.title')}</h4>
                <div dangerouslySetInnerHTML={{ __html: t('termsOfUse.links.outbound.content') }} />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('termsOfUse.links.inbound.title')}</h4>
                <div dangerouslySetInnerHTML={{ __html: t('termsOfUse.links.inbound.content') }} />
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {t('termsOfUse.links.inbound.restrictions', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.termination.title')}</div>
            <div className="term-content text">
              <div dangerouslySetInnerHTML={{ __html: t('termsOfUse.termination.content') }} />
              <ul className="list-disc pl-6 my-2 space-y-1">
                {t('termsOfUse.termination.actions', { returnObjects: true }).map((action, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: action }} />
                ))}
              </ul>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: t('termsOfUse.termination.warning') }} />
            </div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.disclaimerOfWarranties.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.disclaimerOfWarranties.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.limitationOfLiability.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.limitationOfLiability.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.complianceWithLaw.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.complianceWithLaw.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.governingLaw.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.governingLaw.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.general.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.general.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.refundPolicy.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.refundPolicy.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.freeTrialPolicy.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.freeTrialPolicy.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.accountSuspension.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.accountSuspension.content') }} 
            />
          </div>
          <div className="term">
            <div className="term-title sub-heading">{t('termsOfUse.planTransferPolicy.title')}</div>
            <div 
              className="term-content text" 
              dangerouslySetInnerHTML={{ __html: t('termsOfUse.planTransferPolicy.content') }} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;
