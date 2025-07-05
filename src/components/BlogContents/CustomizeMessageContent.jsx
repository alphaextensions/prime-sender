import { useTranslation } from 'react-i18next';

const CustomizeMessageContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          {t('blogs.customizeMessage.title')}
        </p>
        <p className="blog_page_date">{t('blogs.customizeMessage.date')}</p>
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            {t('blogs.customizeMessage.paragraph1')}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              {t('blogs.customizeMessage.primeSender')}
            </a>{" "}
            :
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_4.png" alt={t('blogs.customizeMessage.image1Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.customizeMessage.paragraph2')}
            <br />
            <span style={{ fontWeight: "bold" }}>
              {t('blogs.customizeMessage.boldNote')}
            </span>{" "}
            {t('blogs.customizeMessage.templateText')}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/1eKBHsE1WKDjktk2eFDS3DaeSeX-8QW9D940RLbRASf8/edit?usp=sharing"
              className="blog_text_blue"
            >
              {t('blogs.customizeMessage.templateLink')}
            </a>
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.customizeMessage.paragraph3')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_11.png" alt={t('blogs.customizeMessage.image2Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.customizeMessage.paragraph4')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/customize_box.png" alt={t('blogs.customizeMessage.image3Alt')} />
        </div>
        <div className="blog_page_step">
          <p>{t('blogs.customizeMessage.paragraph5')}</p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.customizeMessage.paragraph6')}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              {t('blogs.customizeMessage.primeSender')}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomizeMessageContent;
