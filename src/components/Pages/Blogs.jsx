import "../../styles/Blogs/blogs.css"
import SectionTitle from "../Common/SectionTitle";

const Blogs = () => {
  return (
    <div className="main-section blog_section">
      <SectionTitle gif="/gifs/blogs.gif" title="Blogs" />
      <div className="main-container blog_container">
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
      </div>
    </div>
  );
};

export default Blogs;
