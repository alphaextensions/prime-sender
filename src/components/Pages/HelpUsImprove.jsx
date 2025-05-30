import SectionTitle from '../common/SectionTitle';
import HelmetHeader from "../common/HelmetHeader";
import '../../styles/HelpUsImprovePage/helpusimprove.css';
import { promoText } from '../Data/seo-data';
import { useEffect } from 'react';
const HelpUsImprove = () => {
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {...promoTextComponentGenerator()}
  </div>

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
        title={'Help Us Improve | Prime Sender - Free AI Web Message Sender'}
        description={'Submit your feedback to help us improve Prime Sender'}
        keywords={'help-us-improve,prime sender help, prime sender feedback'}
      />
      <div className='main-section'>
        {promoTextComponent}
        <SectionTitle
          gif="/gifs/help-us-improve.gif"
          title="Help us Improve"
          subtitle="We strive to give you the best service possible but maybe there are certain things we need to catch up on."
        />
        <div className="main-container improve_container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdAACp4FEHgEkv3o1T1fMMsY76pKv3KUUqp5wV5LT3gTEuhmQ/viewform?embedded=true"
            height="auto"
            className='main-iframe'
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
          <div className='improve_para_2'>
            <p className='sub-heading'>If you had a change of heart somehow and want to know how Prime Sender
              works quickly in 3 steps, here :</p>
            <br />
            <p className='text'>1. Enter the numbers you want to send the message to, separated by comma.</p>
            <p className='text'>2. Enter the message you'd like to send. You could also add attachments 📁.</p>
            <div className='text' style={{ marginLeft: '2rem' }}>
              <ul>
                <li>Click on the icon of 📎 Attachment inside the text box inside the extension</li>
                <li>Select files you'd like to send. You can select multiple files.</li>
                <li>You can click on Add Caption to add caption to your attachment</li>
                <li> Click on Send button inside the extension.</li>
              </ul>
            </div>
            <p className='text'>3. Download the delivery report by clicking on Delivery Report to view the delivery status of the messages and the attachment sent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpUsImprove;
