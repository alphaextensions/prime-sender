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

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/pricing/" element={<Pricing />} />
        <Route exact path="/request-feature" element={<RequestFeature />} />
        <Route exact path="/help-us-improve" element={<HelpUsImprove />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/terms-of-service" element={<TermsOfUse />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ChatSupport />
    </Router>
    </>
  );
};

export default App;
