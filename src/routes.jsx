import { FaHome } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Home, Profile, Tables } from "./components/Dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      // {
      //   icon: <FaHome {...icon} />,
      //   name: "dashboard",
      //   path: "/home",
      //   element: <Home />,
      // },
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
    ],
  },
  {
    title: "auth pages",
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
