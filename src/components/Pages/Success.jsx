import '../../styles/SuccessPage/successPage.css'
import HelmetHeader from '../Common/HelmetHeader';
import featuresList from '../Data/pricing-page-features-list';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Success = ({ plan }) => {
  const successTitle = {basic: "Basic Success", advance: "Advance Success"}

  return (
    <>
      <HelmetHeader
        title={successTitle[plan] + ' | Prime Sender'}
        description={successTitle[plan] + ' for Prime Sender'}
      />
      <div className="main-section">
      <div className="main-container success-container">
        <div className="success-texts-container">
          <p className="heading">Congrats! You have successfully purchased PS {plan[0].toUpperCase() + plan.substr(1)} Premium</p>
          <p className="text">Please reload WhatsApp Web after 10 minutes to activate Premium. You will receive a confirmation email soon.</p>
          <p className="sub-text">If Premium is not enabled, do not worry. Please click on 'Live Support' button on the top left of the extension.</p>
        </div>
        <div className="features-list">
          <p className="heading">Features</p>
          {featuresList.map((feature, index) => (
            <div className="feature" key={index}>
              <p className="text">{feature.name}</p>
              {feature[plan] ?
                <AiOutlineCheck className='check-icon large-text' /> :
                <RxCross2 className='cross-icon large-text' />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Success;