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
import Success from './components/Pages/success';
import ReactGA from "react-ga4";
import {useEffect, useState} from 'react';
import ContactUs from './components/Pages/ContactUs';
import BlogPage from './components/Pages/BlogPage';
import FAQs from './components/Sections/FAQs';
import HowToUse from './components/Pages/HowToUse';
import MainFeatures from './components/Sections/MainFeatures';

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
    { showWebsite ? <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/feature-request" element={<RequestFeature />} />
        <Route exact path="/help-us-improve" element={<HelpUsImprove />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/:id" element={<BlogPage />} />
        <Route exact path="/faqs" element={<FAQs/>} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/terms-of-service" element={<TermsOfUse />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/basic-success" element={<Success plan="basic" />} />
        <Route exact path="/advance-success" element={<Success plan="advance" />} />
        <Route exact path="/how-to-use" element={<HowToUse />} />
        <Route exact path="/main-features" element={<MainFeatures isSlider='false' />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ChatSupport />
    </Router> : '' }
    </>
  );
};

export default App;
