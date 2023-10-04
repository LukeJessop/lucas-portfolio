import Image from "next/image";
import barbieImg from "./assets/barbie-box.png";
import pfp from "./assets/pfp.png"
import EducationAndSkills from "./Education&Skills";
import Experience from "./Experience";

const imgStyle = {
  borderRadius: '50%',
  maxWidth: '500px',
  aspectRatio: '1 / 1'
}

const About = () => {
  return (
    <>
      <section
        id="about"
        data-nav-tooltip="About"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 m-15px-tb">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <Image style={imgStyle} layout="intrinsic" src={pfp} title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="about-info">
                <div className="title">
                  <h3>Need a Developer?</h3>
                </div>
                <div className="about-text">
                  <p>
                    When it comes to web development, I have a myriad of tools
                    under my belt! This probably goes without saying, but I will
                    say it anyway! I develop my projects using Javascript. I am
                    extremely familiar with{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react.dev/"
                    >
                      React
                    </a>
                    , and I also have a ton of experience using{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nextjs.org/"
                    >
                      Nextjs
                    </a>
                    . I like to use{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind
                    </a>{" "}
                    in my projects because styling with it is just so quick! But
                    I also know CSS and{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://sass-lang.com/"
                    >
                      SASS
                    </a>
                    . For back-end tools,{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nodejs.org/en"
                    >
                      Nodejs
                    </a>{" "}
                    is my go-to. I also know a bit of SQL for database
                    management.
                  </p>
                  <div className="btn-bar" style={{ display: "flex" }}>
                    <a
                      className="px-btn px-btn-theme"
                      href="#work"
                      style={{ minWidth: "0" }}
                    >
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 m-15px-tb">
              <div className="about-info">
                <div className="title">
                  <h3>Need a Video Editor?</h3>
                </div>
                <div className="about-text">
                  <p>
                    I am very fluent in{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.adobe.com/products/premiere.html"
                    >
                      Premiere Pro
                    </a>
                    . I have made tons of videos for my less professional
                    youtube passion project{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UCqoiukq0P2ggbULZqJSyJaQ"
                    >
                      Gekko36
                    </a>
                    . And now, I make videos for my more professional current{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UChaN9QPqE1a5tqPCfbN3zGw"
                    >
                      YouTube Channel
                    </a>
                    . I love producing my own and {`others'`} artistic visions
                    through videos.
                  </p>
                  <div className="btn-bar" style={{ display: "flex" }}>
                    <a
                      className="px-btn px-btn-theme"
                      href="#contactus"
                      style={{ minWidth: "0" }}
                    >
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <Image style={imgStyle} layout="intrinsic" src={barbieImg} title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EducationAndSkills />

        <Experience />
      </section>
    </>
  );
};
export default About;
