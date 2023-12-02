import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from "../Common/HelmetHeader";
import BlogCard from "../common/BlogCard";
import '../../styles/blog/blog.css';
import { BlogCardData } from "../Data/blogCard-data";


const Blogs = () => {
  return (
    <>
      <HelmetHeader
        title={'Blogs | Prime Sender'}
        description={'Blogs of Prime Sender'}
      />
      <div className="main-section blog_section">
        <SectionTitle gif="/gifs/blogs.gif" title="Blogs" />
      </div>
      <div className="blog_container">
        {
          BlogCardData.map((data) => (
            <BlogCard key={data.title} title={data.title} date={data.date} imageUrl={data.imageUrl} step={data.step} redirectLink={data.redirectLink} />
          ))
        }
      </div>
    </>
  );
};

export default Blogs;
