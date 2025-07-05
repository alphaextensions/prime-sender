import { useTranslation } from 'react-i18next';

const AddCountryCodeContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          {t('blogs.addCountryCode.title')}
        </p>
        <p className="blog_page_date">{t('blogs.addCountryCode.date')}</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/blog_img_5.png" alt={t('blogs.addCountryCode.coverImageAlt')} />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            {t('blogs.addCountryCode.paragraph1')}{" "}
            <span style={{ fontWeight: "bold" }}>{t('blogs.addCountryCode.boldText')}</span>{" "}
            {t('blogs.addCountryCode.paragraph1Continued')}
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.addCountryCode.paragraph2')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_6.png" alt={t('blogs.addCountryCode.image1Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.addCountryCode.paragraph3')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_15.png" alt={t('blogs.addCountryCode.image2Alt')} />
        </div>
        <div className="blog_page_step">
          <p>{t('blogs.addCountryCode.paragraph4')}</p>
        </div>
      </div>
    </>
  );
};

export default AddCountryCodeContent;
