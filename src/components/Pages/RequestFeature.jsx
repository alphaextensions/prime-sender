import '../../styles/RequestFeature/requestFeatures.css';

const RequestFeature = () => {
  return (
    <>
      <section className='request_feature_container'>
        <h1 className='request_feature_heading'>
          Feature Request
        </h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScexPaMhkIuM4j_8qo1FRA40BUatLfeGZVD_SKF9Gcbgla1fw/viewform?embedded=true"
          height={1000}
          className='request_feature_frame'
        >
          Loading…
        </iframe>
      </section>
    </>
  );
};

export default RequestFeature;
