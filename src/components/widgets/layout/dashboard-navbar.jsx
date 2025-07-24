import { useLocation, Link } from "react-router-dom";
import { Navbar, Typography, Breadcrumbs, IconButton } from "@material-tailwind/react";
import { RiMenu4Fill } from "react-icons/ri";
import { AvatarMenu } from "../profileSection/switchAccounts";
import { primeSenderController, setOpenSidenav, clearCredentials } from "../../context";
import { IoClose } from "react-icons/io5";

export function DashboardNavbar() {
  const [controller, dispatch] = primeSenderController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  let adminLength = controller.credentials.data.filter(user => user.phone && (!user.parent_email || user.parent_email === "" || user.parent_email === "NULL"))

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
      <div className="mx-3 flex justify-between gap-6 md:flex-row md:items-center">
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
        <IconButton className="bg-[#009a88] w-30px h-30px rounded-[50%] hidden max-xs:block" onClick={() => setOpenSidenav(dispatch, !openSidenav)}>
          {!openSidenav ? <RiMenu4Fill color="white" fontSize={"24px"} /> : <IoClose color="white" fontSize={"24px"} />}
        </IconButton>
        {controller.credentials.data.length > 1 && adminLength.length > 1 ? <AvatarMenu /> : ""}
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
