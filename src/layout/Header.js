import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import Image from "next/image";
import pfp from "../components/assets/pfp.jpeg";
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, [blog]);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Lucas Jessop</a>
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
        style={{ overflow: "hidden" }}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <Image
                  layout="responsive"
                  width={100}
                  height={100}
                  src={pfp}
                  alt="profile"
                />
              </div>
              <h5>Lucas</h5>
            </div>
          </div>
          <MenuWithOutBlog setSideBarToggle={setSideBarToggle} />
        </div>
        <div className="nav justify-content-center social-icons">
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UChaN9QPqE1a5tqPCfbN3zGw">
            <i className="fab fa-youtube" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/LukeJessop">
            <i className="fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/luke_jessop_jr/">
            <i className="fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-jessop-7861ab187/">
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

const MenuWithOutBlog = ({ setSideBarToggle }) => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li
        onClick={() => setSideBarToggle(false)}
        data-menuanchor="home"
        className="active"
      >
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li onClick={() => setSideBarToggle(false)} data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li onClick={() => setSideBarToggle(false)} data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
      <li
        onClick={() => setSideBarToggle(false)}
        data-menuanchor="EducationAndSkills"
      >
        <a className="nav-link" href="#EducationAndSkills">
          <i className="ti-id-badge" />
          <span>Education</span>
        </a>
      </li>
      <li onClick={() => setSideBarToggle(false)} data-menuanchor="Experience">
        <a className="nav-link" href="#Experience">
          <i className="ti-id-badge" />
          <span>Experience</span>
        </a>
      </li>
      <li onClick={() => setSideBarToggle(false)} data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      <li onClick={() => setSideBarToggle(false)} data-menuanchor="videos">
        <a className="nav-link" href="#videos">
          <i className="ti-bookmark-alt" />
          <span>My Videos</span>
        </a>
      </li>
      <li onClick={() => setSideBarToggle(false)} data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      {/* <li onClick={() => setSideBarToggle(false)} data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li> */}
    </ul>
  );
};
