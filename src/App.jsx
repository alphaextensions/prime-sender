import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Navbar from "./components/Layouts/Navbar";
import Pricing from "./components/Pages/Pricing";
import RequestFeature from "./components/Pages/RequestFeature";
import HelpUsImprove from "./components/Pages/HelpUsImprove";
import Blogs from "./components/Pages/Blogs";
import TermsOfUse from "./components/Pages/TermsOfUse";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy"
import Footer from "./components/Layouts/Footer";
import ChatSupport from './components/common/ChatSupport';
import Error from './components/Pages/Error';
import ReactGA from "react-ga4";
import {useEffect, useState} from 'react';
import ContactUs from './components/Pages/ContactUs';
import BlogPage from './components/Pages/BlogPage';
import FAQs from './components/sections/FAQs';
import HowToUse from './components/Pages/HowToUse';
import MainFeatures from './components/sections/MainFeatures';
import Success from './components/Pages/Success';
import Checkout from './components/Pages/Checkout';
import { CheckoutProvider } from './components/context/CheckoutContext';

const App = () => {
  const [showWebsite, setShowWebsite] = useState(true);

  const checkForCountry = async () => {
    try {
      const res = await fetch('https://ipapi.co/json');
      const data = await res.json();
      if(data.country=='US' || data.country=='CN'){
        setShowWebsite(false);
      }else{
        setShowWebsite(true);
      }
    } catch (error) {
      console.log(error)  
    }
  }
  // initializing react-ga
  useEffect(() => {
    ReactGA.initialize("G-3KZPL7D3HB");
    checkForCountry();
  }, []);

  return (
    <>
      {showWebsite ?
        <CheckoutProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing key="pricing" />} />
              <Route path="/feature-request" element={<RequestFeature />} />
              <Route path="/help-us-improve" element={<HelpUsImprove />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogPage />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/terms-of-service" element={<TermsOfUse />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/basic-success" element={<Success plan="basic" />} />
              <Route path="/advance-success" element={<Success plan="advance" />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/main-features" element={<MainFeatures isSlider='false' />} />
              <Route path="/pricing/multiple-account" element={<Pricing key="multiple-account" />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            <ChatSupport />
          </Router>
        </CheckoutProvider> : ''}
    </>
  );
};

export default App;
