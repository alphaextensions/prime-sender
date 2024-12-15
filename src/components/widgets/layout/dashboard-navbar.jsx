import { useLocation, Link } from "react-router-dom";
import { Navbar, Typography, Breadcrumbs } from "@material-tailwind/react";
import { primeSenderController } from "../../context";
import { AvatarMenu } from "../profileSection/switchAccounts";

export function DashboardNavbar() {
  const [controller] = primeSenderController();
  const { fixedNavbar } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${fixedNavbar
        ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
        : "px-0 py-1"
        }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="mr-10 flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""}`}
          >
            <span>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all"
              >
                {layout}
              </Typography>
            </span>
            <Link to={`/dashboard/${page}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-green-500 hover:opacity-100"
              >
                {page}
              </Typography>
            </Link>
          </Breadcrumbs>

          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        {controller.credentials.data.length > 1 ? <AvatarMenu /> : ""}
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
