import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Pricing from "./components/Pages/Pricing";
import RequestFeature from "./components/Pages/RequestFeature";
import HelpUsImprove from "./components/Pages/HelpUsImprove";
import Blogs from "./components/Pages/Blogs";
import TermsOfUse from "./components/Pages/TermsOfUse";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Login from "./components/Pages/login";
import ContactUs from "./components/Pages/ContactUs";
import BlogPage from "./components/Pages/BlogPage";
import HowToUse from "./components/Pages/HowToUse";
import Success from "./components/Pages/Success";
import Error from "./components/Pages/Error";
import MainLayout from "./components/Layouts/MainLayout";
import DashboardLayout from "./components/Layouts/Dashboard";
import ReactGA from "react-ga4";
import { useEffect, useState } from 'react';
import FAQs from './components/sections/FAQs';
import MainFeatures from './components/sections/MainFeatures';
import Checkout from './components/Pages/Checkout';
import { CheckoutProvider } from './components/context/CheckoutContext';
import RefundAndCancellation from './components/Pages/RefundAndCancellation';
import { primeSenderController,setLocation } from './components/context';

const App = () => {
  const [showWebsite, setShowWebsite] = useState(true);
  const [, dispatch] = primeSenderController(); 
  const checkForCountry = () => {
    fetch('https://ipapi.co/json/')
      .then(res => {
        if (!res.ok) throw new Error('Primary API failed');
        return res.json();
      })
      .then((data) => handleLocationResponse(data))
      .catch((err) => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
          .then(res => {
            if (!res.ok) throw new Error('Fallback API failed');
            return res.json();
          })
          .then((data) =>  handleLocationResponse(data))
          .catch(fallbackErr => {
            console.error('Both APIs failed.', fallbackErr);
          });
      });
  };

  const handleLocationResponse = (fullData) => {
    setLocation(dispatch, fullData);
    if (["US", "CN"].includes(fullData.country_code)) {
      setShowWebsite(false);
    }
  };

  useEffect(() => {
    ReactGA.initialize("G-3KZPL7D3HB");
    checkForCountry();
  }, []);

  return (
    <>

     {showWebsite ?
        <CheckoutProvider>
         <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/pricing" element={<Pricing key="pricing" />} />
              <Route path="/feature-request" element={<RequestFeature />} />
              <Route path="/help-us-improve" element={<HelpUsImprove />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogPage />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/terms-of-service" element={<TermsOfUse />} />
              <Route path="/refund-policy" element={<RefundAndCancellation />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/basic-success" element={<Success plan="basic" />} />
              <Route path="/advance-success" element={<Success plan="advance" />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/main-features" element={<MainFeatures isSlider='false' />} />
              <Route path="/pricing/multiple-account" element={<Pricing key="multiple-account" />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<DashboardLayout />} />
          </Routes>
        </Router>
        </CheckoutProvider> : ''}


    </>
  );
};

export default App;
