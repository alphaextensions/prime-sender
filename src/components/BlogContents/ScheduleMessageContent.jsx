import { useTranslation } from 'react-i18next';

const ScheduleMessageContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">{t('blogs.scheduleMessage.title')}</p>
        <p className="blog_page_date">{t('blogs.scheduleMessage.date')}</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/schedule.png" alt={t('blogs.scheduleMessage.coverImageAlt')} />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_subheading">
          <p>{t('blogs.scheduleMessage.subheading1')}</p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.scheduleMessage.paragraph1')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_schedule.png" alt={t('blogs.scheduleMessage.image1Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.scheduleMessage.paragraph2')}
          </p>
        </div>
        <div className="blog_page_step">
          <p>{t('blogs.scheduleMessage.paragraph3')}</p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.scheduleMessage.paragraph4')}
          </p>
        </div>
        <div className="blog_page_subheading">
          <p>{t('blogs.scheduleMessage.subheading2')}</p>
        </div>
        <ul className="blog_page_ul">
          <li>
            {t('blogs.scheduleMessage.point1')}
          </li>
          <li style={{ fontWeight: "bold" }}>
            {t('blogs.scheduleMessage.point2')}
          </li>
          <li>
            {t('blogs.scheduleMessage.point3')}
          </li>
          <li>{t('blogs.scheduleMessage.point4')}</li>
        </ul>
      </div>
    </>
  );
};

export default ScheduleMessageContent;
