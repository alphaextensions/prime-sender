import React, { useEffect, useRef, useState } from 'react';
import '../../styles/common/googleTranslate.css';
import { BsTranslate } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const GoogleTranslate = () => {
  const [currentLang, setCurrentLang] = useState("");
  const intervalRef = useRef(null);

  const getCountryLanguage = async () => {
    try {
      const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
      const data = await res.json();
      const country_code = data?.country_code;

      if (country_code) {
        const locale = new Intl.Locale('und', { region: country_code });
        const minimizedLocale = locale.minimize();
        return minimizedLocale.baseName || 'en';
      } else {
        return 'en';
      }
    } catch (err) {
      console.error('Failed :: getCountryLanguage :: Error = ', err);
      return 'en';
    }
  }

  const getBrowserLanguage = () => {
    try {
      const browserLang = navigator.language || navigator.userLanguage;
      return browserLang ? browserLang.split('-')[0] : 'en';
    } catch (err) {
      console.error('Failed :: getBrowserLanguage :: Error = ', err);
      return 'en';
    }
  };

  const changeCurrentLangauge = (newLang) => {
    const selectElement = document.querySelector('select.goog-te-combo');

    if (selectElement) {
      const optionExists = Array.from(selectElement.options).some(
        (option) => option.value === newLang
      );

      if (optionExists) {
        setCurrentLang(newLang);
        localStorage.setItem('prime-sender-language', newLang);

        selectElement.value = newLang;
        selectElement.dispatchEvent(new Event('change'));
      } else {
        setCurrentLang('en');
        localStorage.setItem('prime-sender-language', 'en');
      }
    }
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const selectElement = document.querySelector('select.goog-te-combo');

      if (selectElement && intervalRef.current) {
        clearInterval(intervalRef.current);

        // Add event listener to update the `currentLang` when user selects a new one
        selectElement.addEventListener('change', () => {
          const selectedLang = selectElement.value;
          if (selectedLang && selectedLang !== '') {
            // console.log("Language changes from [" + currentLang + "] to [" + selectedLang + "]");
            setCurrentLang(selectedLang);
            localStorage.setItem('prime-sender-language', selectedLang);
          }
        });

        // Set new language
        let prevLang = localStorage.getItem('prime-sender-language');
        let browserLang = getBrowserLanguage();
        let newLang = prevLang || browserLang || 'en';

        // console.log("NEW LANGUAGE :: ", newLang);
        changeCurrentLangauge(newLang);
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className='translate-container' style={{ display: (currentLang) ? 'flex' : 'none' }}>
      <BsTranslate className='translate-lang-icon' size={20} />
      <span className='current-language notranslate'>{currentLang.toUpperCase()}</span>
      <IoIosArrowDown className='translate-dropdown-icon' />
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
