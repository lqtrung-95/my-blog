import { Navbar, Nav, Image, Media } from "react-bootstrap";
import Link from "next/link";
import ThemeToggle from "components/ThemeToggle";

import styles from "./_styles.module.css";

const NavBarItems = [
  { text: "Home", href: "/" },
  { text: "Newsletter", href: "/" },
  { text: "Twitter", href: "/" },
];

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      variant={theme.type}
      className={`fj-navbar fj-nav-base ${styles.navbar}`}
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <Link legacyBehavior href="/">
          <Media className="align-items-center">
            <Image
              roundedCircle
              width={44}
              height={44}
              className="img-fluid mr-2"
              src="img/logo.svg"
              alt="logo"
            />
            <a
              style={{ color: theme.fontColor, textTransform: "capitalize" }}
              className="text-gradient"
            >
              Trung's Blog
            </a>
          </Media>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-3 mt-md-0">
          {/* <div></div> */}
          <ThemeToggle onChange={toggleTheme} />
          {NavBarItems.map(({ text, href }) => (
            <Nav.Link
              key={text}
              as={() => (
                <Link legacyBehavior href={href}>
                  <a
                    className={`fj-navbar-item fj-navbar-link mr-md-2 ${styles.navbarItem}`}
                  >
                    {text}
                  </a>
                </Link>
              )}
            />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
