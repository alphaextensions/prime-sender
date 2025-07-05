import i18next from 'i18next';

const t = (key) => i18next.t(key);

export const BlogCardData = [
  {
    get title() {
      return t('blogs.translateChats.title');
    },
    get date() {
      return t('blogs.translateChats.date');
    },
    imageUrl: "/images/translate.png",
    get step() {
      return t('blogs.translateChats.cardSummary');
    },
    redirectLink: "/blogs/translate-chats",
  },
  {
    get title() {
      return t('blogs.multipleCaption.title');
    },
    get date() {
      return t('blogs.multipleCaption.date');
    },
    imageUrl: "/images/attachments.png",
    get step() {
      return t('blogs.multipleCaption.cardSummary');
    },
    redirectLink: "/blogs/multiple-caption",
  },
  {
    get title() {
      return t('blogs.sendUsingExcel.title');
    },
    get date() {
      return t('blogs.sendUsingExcel.date');
    },
    imageUrl: "/images/excel-2.png",
    get step() {
      return t('blogs.sendUsingExcel.cardSummary');
    },
    redirectLink: "/blogs/send-using-excel",
  },
  {
    get title() {
      return t('blogs.scheduleMessage.title');
    },
    get date() {
      return t('blogs.scheduleMessage.date');
    },
    imageUrl: "/images/schedule.png",
    get step() {
      return t('blogs.scheduleMessage.cardSummary');
    },
    redirectLink: "/blogs/schedule-message",
  },
  {
    get title() {
      return t('blogs.customizeMessage.title');
    },
    get date() {
      return t('blogs.customizeMessage.date');
    },
    imageUrl: "/images/excel-ss.png",
    get step() {
      return t('blogs.customizeMessage.cardSummary');
    },
    redirectLink: "/blogs/customize-message",
  },
  {
    get title() {
      return t('blogs.addCountryCode.title');
    },
    get date() {
      return t('blogs.addCountryCode.date');
    },
    imageUrl: "/images/country-code-ss.png",
    get step() {
      return t('blogs.addCountryCode.cardSummary');
    },
    redirectLink: "/blogs/add-country-code",
  },
  {
    get title() {
      return t('blogs.quickResponse.title');
    },
    get date() {
      return t('blogs.quickResponse.date');
    },
    imageUrl: "/images/mail.png",
    get step() {
      return t('blogs.quickResponse.cardSummary');
    },
    redirectLink: "/blogs/quick-response",
  },
];
