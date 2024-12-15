import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatSupport from "../common/ChatSupport";
import "../../main.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
      <ChatSupport />
    </>
  );
};

export default MainLayout;
