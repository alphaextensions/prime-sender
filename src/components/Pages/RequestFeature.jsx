import HelmetHeader from "../Common/HelmetHeader";
import SectionTitle from "../Common/SectionTitle";
import { promoText } from "../Data/seo-data";

const RequestFeature = () => {
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {...promoTextComponentGenerator()}
  </div>
  return (
    <>
      <HelmetHeader
        title={'Feature Request | Prime Sender - Best Web Sender Extension'}
        description={'Submit your request for adding new features to Prime Sender'}
        keywords={'prime sender request a feature, request new feature, add feature'}
      />
      <div className="main-section">
        {promoTextComponent}
      <SectionTitle gif="/gifs/feature-request.gif" title="Feature Request" />
      <div className='main-container request_feature_container'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScexPaMhkIuM4j_8qo1FRA40BUatLfeGZVD_SKF9Gcbgla1fw/viewform?embedded=true"
          height={1000}
          className='main-iframe'
        >
          Loading…
        </iframe>
      </div>
    </div>
    </>
  );
};

export default RequestFeature;
