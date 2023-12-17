import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from "../Common/HelmetHeader";
import '../../styles/blog/blog.css';
import { useParams } from "react-router-dom";
import { blogHtml } from "../../components/Data/blogs-html.jsx";

const BlogPage = () => {
  const { id } = useParams();
  return (
    <>
      <HelmetHeader
        title={'Blog | Prime Sender - Best Web Sender Extension'}
        description={'Blog Page of Prime Sender'}
      />
      <div className="main-section blog_section">
        <SectionTitle gif="/gifs/blogs.gif" title="Blog" />
        <div className="blog_page_container">
          {blogHtml[id]}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
