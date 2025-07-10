import { useTranslation } from 'react-i18next';

const MultipleCaptionContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          {t('blogs.multipleCaption.title')}
        </p>
        <p className="blog_page_date">{t('blogs.multipleCaption.date')}</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/attachments.png" alt={t('blogs.multipleCaption.coverImageAlt')} />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_subheading">
          <p>{t('blogs.multipleCaption.subheading1')}</p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.multipleCaption.step1')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/multiple_attachments.png" alt={t('blogs.multipleCaption.image1Alt')} />
        </div>
        <div className="blog_page_subheading">
          <p>{t('blogs.multipleCaption.subheading2')}</p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/caption.png" alt={t('blogs.multipleCaption.image2Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.multipleCaption.step2')}
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.multipleCaption.step3')}
          </p>
        </div>
      </div>
    </>
  );
};

export default MultipleCaptionContent;
