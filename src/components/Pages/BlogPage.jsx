import SectionTitle from "../common/SectionTitle";
import HelmetHeader from "../common/HelmetHeader";
import '../../styles/blog/blog.css';
import { useParams } from "react-router-dom";
import { blogHtml } from "../../components/Data/blogs-html.jsx";
import { promoText } from "../Data/seo-data.js";
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const promoTextComponentGenerator = () => {
    return promoText.map((text, index) => {
      return <span key={index} className='white_promo_text pro'>{text}</span>
    })
  }

  const promoTextComponent = <div className='promo_text_container'>
    {promoTextComponentGenerator()}
  </div>
  return (
    <>
      <HelmetHeader
        title={t('blogs.blogPageTitle')}
        description={t('blogs.blogPageDescription')}
        keywords={t('blogs.blogPageKeywords')}
      />
      <div className="main-section blog_section">
        <SectionTitle gif="/gifs/blogs.gif" title={t('blogs.sectionTitle')} />
        <div className="blog_page_container">
          {blogHtml[id]}
        </div>
        {promoTextComponent}
      </div>
    </>
  );
};

export default BlogPage;
