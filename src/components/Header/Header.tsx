import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pathLinks = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/about", text: "About" },
    { id: 3, path: "/certificates", text: "Certificates" },
    { id: 4, path: "/projects", text: "Projects" },
    // {id: 5, path: "/contact", text: "Contact"},
  ];

  const [isActiveBurger, setIsActiveBurger] = React.useState(false);
  const [isActiveNavbar, setIsActiveNavbar] = React.useState(false);
  const [isActiveLink, setIsActiveLink] = React.useState(0);

  const onToggle = () => {
    setIsActiveBurger((prev) => !prev);
    setIsActiveNavbar((prev) => !prev);
  };

  const burger = isActiveBurger ? (
    <i onClick={onToggle} className="bx bx-x" id="menu-icon"></i>
  ) : (
    <i onClick={onToggle} className="bx bx-menu" id="menu-icon"></i>
  );
  const onChangeActive = (index: number) => {
    setIsActiveLink(index);
    setIsActiveNavbar(false);
    setIsActiveBurger(false);
  };
  const isActiveNavClass = isActiveNavbar ? "active" : "";
  const links = pathLinks.map((l, index) => (
    <Link
      key={l.id}
      onClick={() => onChangeActive(index)}
      to={l.path}
      className={isActiveLink === index ? "active" : ""}
    >
      {l.text}
    </Link>
  ));
  return (
    <header className="header">
      <Link onClick={() => onChangeActive(0)} to="/" className="logo">
        Portfolio
      </Link>
      {burger}
      <nav className={`navbar ${isActiveNavClass}`}>{links}</nav>
    </header>
  );
};

export default Header;
