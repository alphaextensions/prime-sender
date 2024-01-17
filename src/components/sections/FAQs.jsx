import faqs from '../Data/faqs'
import '../../styles/HomePage/faqs.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../Common/SectionTitle';
import { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { Helmet } from 'react-helmet';

const FAQs = () => {

  const [activeIndex, setActiveIndex] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleQuestion = (index) => {
    if (activeIndex.includes(index)) {
      const newActiveIndex = activeIndex.filter(item => item !== index);
      setActiveIndex(newActiveIndex);
    }
    else {
      setActiveIndex([...activeIndex, index]);
    }
  }

  return (
    <>
      <Helmet
        title={'FAQs | Prime Sender - Best Web Sender Extension'}
        description={'FAQs of Prime Sender'}
        keywords={'prime sender frequently asked questions, FAQs, prime sender faqs, most frequently asked questions'}
      />
      <div className="faq_section">
        <SectionTitle gif="/gifs/faq.gif" title="Frequently Asked Questions" />
        <div className="questions" data-aos="fade-down">
          {
            faqs.map((item, index) => {
              return (
                <div className="accordion-item" key={index}>
                  <button id="accordion-button-1" aria-expanded={activeIndex.includes(index) ? true : false} onClick={() => toggleQuestion(index)}>
                    <span className="question_title large_text">{item.question}</span>
                    <span className="question_icon" aria-hidden="true">{activeIndex.includes(index) ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                  </button>
                  <div className="accordion-content">
                    <p className='question_answer' dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="custom-shape-divider-bottom-1692459850">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default FAQs