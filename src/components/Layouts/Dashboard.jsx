import { Routes, Route } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { FaEllipsisVertical } from "react-icons/fa6";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "../widgets/layout";
import routes from "../../routes";
import "../../../public/css/index.css"
import { primeSenderController, setOpenConfigurator, setCredentials } from "../context";
import { apiFetch } from "../Utils/apiFetch";
import { useEffect } from "react";

export function Dashboard() {
  const [controller, dispatch] = primeSenderController();
  const { sidenavType } = controller;
  const url = import.meta.env.VITE_PROD_LOGIN_API;

  const handleLogin = (cred, data) => {
    setCredentials(dispatch, { cred, data });
  };

  useEffect(() => {
    async function fetchData() {
      const requestBody = {
        authToken: controller.credentials.cred,
        phoneNumber: controller.credentials.data[controller.profile]?.phone || ""
      };
  
      try {
        const data = await apiFetch(url, "POST", requestBody);
  
        let res = JSON.parse(data.body);
  
        if (data.statusCode === 200) {
          handleLogin(res.data.authToken, res.data.userData);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, []); 
  
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80 min-h-[100vh]">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <FaEllipsisVertical />
        </IconButton>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600 relative bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/components/Layout/Dashboard.jsx";

export default Dashboard;
