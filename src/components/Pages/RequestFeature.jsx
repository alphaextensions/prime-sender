const RequestFeature = () => {
  return (
    <>
      <section
        style={{
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <h1
          style={{ fontSize: "28px", textAlign: "center", margin: "24px 0px" }}
        >
          Feature Request
        </h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScexPaMhkIuM4j_8qo1FRA40BUatLfeGZVD_SKF9Gcbgla1fw/viewform?embedded=true"
          style={{ margin: "auto", width: "100%", maxWidth: "840px" , border: '0', minHeight: '1000px'}}
        >
          Loading…
        </iframe>
      </section>
    </>
  );
};

export default RequestFeature;
