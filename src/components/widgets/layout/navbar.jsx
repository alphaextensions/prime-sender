import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../../i18n";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="blue-gray"
          className="capitalize"
        >
          <Link to={path} className="flex items-center gap-1 p-1 font-normal">
            {icon &&
              React.createElement(icon, {
                className: "w-[18px] h-[18px] opacity-50 mr-1",
              })}
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="p-3">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            variant="small"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
          >
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        
        {/* Language Dropdown */}
        <div className="hidden lg:block mr-2">
          <Menu>
            <MenuHandler>
              <Button variant="text" className="flex items-center gap-1 p-1 rounded-full">
                <MdLanguage className="w-5 h-5" />
                <span className="text-sm">{i18n.language === 'pt' ? 'PT' : 'EN'}</span>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={() => handleLanguageChange('en')} className={i18n.language === 'en' ? 'bg-blue-50' : ''}>
                English
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange('pt')} className={i18n.language === 'pt' ? 'bg-blue-50' : ''}>
                Português
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        
        {React.cloneElement(action, {
          className: "hidden lg:inline-block",
        })}
        <IconButton
          variant="text"
          size="sm"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoClose strokeWidth={2} className="h-6 w-6" />
          ) : (
            <FaBarsStaggered strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          
          {/* Mobile Language Selector */}
          <div className="mb-4 block lg:hidden">
            <Typography variant="small" color="blue-gray" className="mb-2 font-bold">
              {t('navbar.language')}
            </Typography>
            <div className="flex gap-2">
              <Button 
                variant={i18n.language === 'en' ? 'filled' : 'outlined'}
                size="sm" 
                className={i18n.language === 'en' ? 'bg-blue-500' : 'border-blue-500 text-blue-500'}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </Button>
              <Button 
                variant={i18n.language === 'pt' ? 'filled' : 'outlined'}
                size="sm" 
                className={i18n.language === 'pt' ? 'bg-blue-500' : 'border-blue-500 text-blue-500'}
                onClick={() => handleLanguageChange('pt')}
              >
                Português
              </Button>
            </div>
          </div>
          
          {React.cloneElement(action, {
            className: "w-full block lg:hidden",
          })}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Prime-Sender Web",
  action: (
    <a
      href="#"
    >
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
