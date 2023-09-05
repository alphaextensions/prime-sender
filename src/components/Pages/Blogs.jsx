import "../../styles/Blogs/blogs.css"

const Blogs = () => {
  return (
    <>
      <section className="blog_container">
        <h1 className="blog_heading">
          Blogs
        </h1>
        <iframe
          src="https://primesender.blogspot.com/"
          className="blog_frame"
          height="1080"
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
