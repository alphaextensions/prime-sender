import { MdDashboard } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Home, Profile, Tables, Settings } from "./components/Dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <MdDashboard {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <CgProfile {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      // {
      //   icon: <FaTableList {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "settings",
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [
      {
        icon: <FiLogOut {...icon} />,
        name: "logout",
      },
    ],
  },
];

export default routes;
