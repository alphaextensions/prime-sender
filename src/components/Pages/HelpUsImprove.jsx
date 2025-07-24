import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import HelmetHeader from "../common/HelmetHeader";
import '../../styles/HelpUsImprovePage/helpusimprove.css';
import { promoText } from '../Data/seo-data';
import { useEffect } from 'react';

const HelpUsImprove = () => {
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

  useEffect(() => {
    async function unInstallExtension() {
      const urlParams = new URLSearchParams(window.location.search);
      const clientId = urlParams.get("clientId")
      const againVisit = window.localStorage.getItem("clientId") === clientId
      if (clientId && !againVisit) {
        try {
          window.localStorage.setItem("clientId", clientId)
          console.log(clientId)
          const response = await fetch("https://www.google-analytics.com/mp/collect?measurement_id=G-RKJ49K5JXL&api_secret=jJNQa1g_Qw64CF4MRAKj7A",
            {
              method: 'POST',
              body: JSON.stringify({
                client_id: clientId,
                events: [
                  {
                    name: "extension_uninstall",
                    params: {}
                  }
                ]
              })
            }
          );
        } catch (e) {
          console.error('Google Analytics request failed with an exception', e);
        }
      }
    }
    unInstallExtension()
  }, [])

  return (
    <>
      <HelmetHeader
        title={t('helpUsImprove.pageTitle')}
        description={t('helpUsImprove.pageDescription')}
        keywords={t('helpUsImprove.pageKeywords')}
      />
      <div className='main-section'>
        {promoTextComponent}
        <SectionTitle
          gif="/gifs/help-us-improve.gif"
          title={t('helpUsImprove.title')}
          subtitle={t('helpUsImprove.subtitle')}
        />
        <div className="main-container improve_container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdAACp4FEHgEkv3o1T1fMMsY76pKv3KUUqp5wV5LT3gTEuhmQ/viewform?embedded=true"
            height="auto"
            className='main-iframe'
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title={t('helpUsImprove.title')}
          >
            {t('helpUsImprove.loading')}
          </iframe>
          <div className='improve_para_2'>
            <p className='sub-heading'>{t('helpUsImprove.stepsTitle')}</p>
            <br />
            {t('helpUsImprove.steps', { returnObjects: true }).map((step, index) => (
              <p key={index} className='text'>{step}</p>
            ))}
            <div className='text' style={{ marginLeft: '2rem' }}>
              <ul>
                {t('helpUsImprove.attachmentSteps', { returnObjects: true }).map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpUsImprove;
