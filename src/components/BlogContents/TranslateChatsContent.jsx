
import { useTranslation } from 'react-i18next';

const TranslateChatsContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          {t('blogs.translateChats.title')}
        </p>
        <p className="blog_page_date">{t('blogs.translateChats.date')}</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/translate.png" alt={t('blogs.translateChats.coverImageAlt')} />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            1. {t('blogs.translateChats.step1')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/translate_1.png" alt={t('blogs.common.blogImage')} />
        </div>
        <div className="blog_page_content_image">
          <img src="/images/translate_2.png" alt={t('blogs.common.blogImage')} />
        </div>
        <div className="blog_page_step">
          <p>
            2. {t('blogs.translateChats.step2')}
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            3. {t('blogs.translateChats.step3')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/switch_1.png" alt={t('blogs.common.blogImage')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.translateChats.translateOption')}
          </p>
        </div>

        <div className="blog_page_step">
          <p>
            {t('blogs.translateChats.undoTranslation')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/switch_2.png" alt={t('blogs.common.blogImage')} />
        </div>
      </div>
    </>
  );
};

export default TranslateChatsContent;
