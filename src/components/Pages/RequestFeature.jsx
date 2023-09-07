import '../../styles/RequestFeature/requestFeatures.css';
import SectionTitle from "../Common/SectionTitle";

const RequestFeature = () => {
  return (
    <div className="main-section">
      <SectionTitle gif="/gifs/feature-request.gif" title="Feature Request" />
      <div className='main-container request_feature_container'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScexPaMhkIuM4j_8qo1FRA40BUatLfeGZVD_SKF9Gcbgla1fw/viewform?embedded=true"
          height={1000}
          className='request_feature_frame'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default RequestFeature;
