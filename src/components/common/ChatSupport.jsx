import React from 'react'
import '../../styles/Common/chatSupport.css'

const ChatSupport = () => {
  const whatsappWebURL = window.innerWidth <= 768 ? 'whatsapp://send?phone=919160583572&text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender' 
  :  'https://web.whatsapp.com/send?phone=919160583572&text=Hi%2C%20I%20would%20like%20to%20request%20chat%20support%20for%20Prime%20Sender';
  
  return (
    <a
      href={whatsappWebURL}
      target="_blank"
      className="chat-support"
    >
      <img src="/images/whatsapp.png" alt="Chat Support" />
      <div className="tooltip">
        <div className="support-text">Hey! Can I help you?</div>
      </div>
    </a>
  );
};

export default ChatSupport;