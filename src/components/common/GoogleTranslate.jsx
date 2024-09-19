import React, { useEffect, useRef, useState } from 'react';
import '../../styles/common/googleTranslate.css';
import { BsTranslate } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const GoogleTranslate = () => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('prime-sender-langauge') || 'en');
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

  useEffect(() => {
    intervalRef.current = setInterval(async () => {
      const selectElement = document.querySelector('select.goog-te-combo');
      console.log("START INTERVAL ", intervalRef.current);

      if (selectElement && intervalRef.current) {
        clearInterval(intervalRef.current);
        console.log("STOP INTERVAL", intervalRef.current);

        // Add event listener to update the `currentLang` when user selects a new one
        selectElement.addEventListener('change', () => {
          const selectedLang = selectElement.options[selectElement.selectedIndex].value;
          if (selectedLang !== currentLang) {
            console.log("LANG CHANGED", selectedLang);
            setCurrentLang(selectedLang);
            localStorage.setItem('prime-sender-language', selectedLang);
          }
        });


        let prevLang = localStorage.getItem('prime-sender-langauge');
        if (!prevLang) {
          // Set country language
          let countryLang = await getCountryLanguage();

          // Check if the `countryLang` exists as an option in the Google Translate dropdown
          const optionExists = Array.from(selectElement.options).some(
            (option) => option.value === countryLang
          );

          // If the langCode exists, change the selected language; otherwise, keep English
          if (optionExists && countryLang !== currentLang) {
            // setCurrentLang(countryLang);
            // localStorage.setItem('prime-sender-language', countryLang);

            selectElement.value = countryLang;
            selectElement.dispatchEvent(new Event('change'));
          }
        } else {
          selectElement.value = prevLang;
          selectElement.dispatchEvent(new Event('change'));
        }
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className='translate-container'>
      <BsTranslate className='translate-lang-icon' size={20} />
      <span className='current-language notranslate'>{currentLang.toUpperCase()}</span>
      <IoIosArrowDown className='translate-dropdown-icon' />
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
