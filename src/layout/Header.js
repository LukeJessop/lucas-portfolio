import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Lucas</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQG77Law2kJMPw/profile-displayphoto-shrink_200_200/0/1692375857055?e=1700697600&v=beta&t=ZA4ZFowv7Pm9Eje-6AnhowKAXMFvSsRI3bhL8P2QCAs"
                  alt="profile"
                />
              </div>
              <h5>Lucas</h5>
            </div>
          </div>
          <MenuWithOutBlog />
        </div>
        <div className="nav justify-content-center social-icons">
          {/* <a href="#">
            <i className="fab fa-facebook-f" />
          </a> */}
          {/* <a href="#">
            <i className="fab fa-twitter" />
          </a> */}
          <a href="https://www.instagram.com/luke_jessop_jr/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-jessop-7861ab187/">
            <i className="fab fa-linkedin-in" />
          </a>
          {/* <a href="#">
            <i className="fab fa-pinterest" />
          </a> */}
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};
