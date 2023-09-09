import SectionTitle from "../Common/SectionTitle";

const Blogs = () => {
  document.title = 'Blogs | Prime Sender';
  
  return (
    <div className="main-section blog_section">
      <SectionTitle gif="/gifs/blogs.gif" title="Blogs" />
      <div className="main-container blog_container">
        <iframe
          src="https://primesender.blogspot.com/"
          className="main-iframe"
          height="1080"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Blogs;
