import { useTranslation } from 'react-i18next';

const QuickResponseContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          {t('blogs.quickResponse.title')}
        </p>
        <p className="blog_page_date">{t('blogs.quickResponse.date')}</p>
      </div>
      <div style={{ width: "700px" }} className="blog_page_cover_image">
        <img src="/images/blog_img_10.png" alt={t('blogs.quickResponse.coverImageAlt')} />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_subheading">
          <p>{t('blogs.quickResponse.subheading')}</p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.quickResponse.paragraph1')}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              {t('blogs.quickResponse.primeSenderLink')}
            </a>
            {", "}
            {t('blogs.quickResponse.paragraph1Continued')}
          </p>
        </div>
        <div style={{ width: "800px" }} className="blog_page_content_image">
          <img src="/images/blog_img_7.png" alt={t('blogs.quickResponse.image1Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.quickResponse.paragraph2')}
          </p>
        </div>
        <div style={{ width: "800px" }} className="blog_page_content_image">
          <img src="/images/blog_img_8.png" alt={t('blogs.quickResponse.image2Alt')} />
        </div>
        <div className="blog_page_step">
          <p>{t('blogs.quickResponse.paragraph3')}</p>
        </div>
        <div style={{ width: "800px" }} className="blog_page_content_image">
          <img src="/images/edit_template.png" alt={t('blogs.quickResponse.image3Alt')} />
        </div>
      </div>
    </>
  );
};

export default QuickResponseContent;
