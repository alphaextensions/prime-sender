import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from "../Common/HelmetHeader";
import '../../styles/blog/blog.css';
import { useParams } from "react-router-dom";
import { blogHtml } from "../../components/Data/blogs-html.jsx";
import { promoText } from "../Data/seo-data.js";

const BlogPage = () => {
  const { id } = useParams();
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
        title={'Blog | Prime Sender - Best Web Sender Extension'}
        description={'Blog Page of Prime Sender, Efficient WhatsApp Sender Extension for Productive Messaging, Unlock Seamless Communication with Our WhatsApp Sender Extension'}
        keywords={'Blogs,prime sender blog page, prime sender blogs'}
      />
      <div className="main-section blog_section">
        <SectionTitle gif="/gifs/blogs.gif" title="Blog" />
        <div className="blog_page_container">
          {blogHtml[id]}
        </div>
        {promoTextComponent}
      </div>
    </>
  );
};

export default BlogPage;
