import { useTranslation } from 'react-i18next';

const SendUsingExcelContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          {t('blogs.sendUsingExcel.title')}
        </p>
        <p className="blog_page_date">{t('blogs.sendUsingExcel.date')}</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/excel-2.png" alt={t('blogs.sendUsingExcel.coverImageAlt')} />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            {t('blogs.sendUsingExcel.step1')}
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.sendUsingExcel.step2')}{" "}
            <a
              className="blog_page_link"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/1xCZr8e0wKO8bsQdrVZdXrmfijgO-zgLXLzFjAjaX8eQ/edit?usp=sharing"
            >
              {t('blogs.sendUsingExcel.templateLink')}
            </a>
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_1.png" alt={t('blogs.sendUsingExcel.image1Alt')} />
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.sendUsingExcel.step3')}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              {t('blogs.sendUsingExcel.primeSender')}
            </a>{" "}
            {t('blogs.sendUsingExcel.step3Continued')}
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/uploda_excel.png" alt={t('blogs.sendUsingExcel.image2Alt')} />
        </div>
        <div className="blog_page_step">
          <p>{t('blogs.sendUsingExcel.step4')}</p>
        </div>
        <div className="blog_page_step">
          <p>
            {t('blogs.sendUsingExcel.step5')}
          </p>
        </div>
      </div>
    </>
  );
};

export default SendUsingExcelContent;
