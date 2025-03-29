import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2 mr-10">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 max-xs:flex-col-reverse md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, made by{" "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-[#009A88] font-bold"
          >
            {brandName}
          </a>{" "}
        </Typography>
        <ul className="flex items-center gap-4 max-xs:flex-col">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-[#009A88]"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Zero To Zee",
  brandLink: "https://prime-sender.com",
  routes: [
    { name: "Home", path: "https://prime-sender.com" },
    { name: "Pricing", path: "https://prime-sender.com/pricing" },
    { name: "Features", path: "https://prime-sender.com/main-features" },
    { name: "Contact Us", path: "https://prime-sender.com/contactus" },
    { name: "Terms of service ", path: "https://prime-sender.com/terms-of-service" },
    { name: "Blogs", path: "https://prime-sender.com/blogs" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
