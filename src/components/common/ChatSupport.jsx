import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/common/chatSupport.css'

const ChatSupport = () => {
  const { t } = useTranslation();

  const whatsappWebURL = window.innerWidth <= 768 ? 'whatsapp://send?phone=917058067789&text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender' 
  :  'https://web.whatsapp.com/send?phone=917058067789&text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender';
  
  return (
    <a
      href={whatsappWebURL}
      target="_blank"
      className="chat-support"
    >
      <img src="/images/whatsapp.png" alt="Chat Support" />
      <div className="tooltip">
        <div className="support-text">{t('chatSupport.tooltip')}</div>
      </div>
    </a>
  );
};

export default ChatSupport;