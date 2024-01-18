import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from "../Common/HelmetHeader";
import BlogCard from "../common/BlogCard";
import '../../styles/blog/blog.css';
import { BlogCardData } from "../Data/blogCard-data";
import { promoText } from "../Data/seo-data";


const Blogs = () => {
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
        title={'Blogs | Prime Sender - Best Web Sender Extension'}
        description={'Blogs of Prime Sender'}
        keywords={'Blogs,prime sender blog page, prime sender blogs,Chat Productivity, WhatsApp Sender Extension'}
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
      {promoTextComponent}
    </>
  );
};

export default Blogs;
