const Blogs = () => {
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
          Blogs
        </h1>
        <iframe
          src="https://primesender.blogspot.com/"
          height="1080"
          style={{ margin: "auto", width: "100%", maxWidth: "840px" }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </section>
    </>
  );
};

export default Blogs;
