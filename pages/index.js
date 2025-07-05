import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
import TypingAnimation from "../src/components/TypingAnimation";
import Image from "next/image";
import Experience from "../src/components/Experience";
import EducationAndSkills from "../src/components/Education&Skills";
import Videos from "../src/components/Videos";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexVideo = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner ">
          {/* <div
            className="video-bg"
            data-property="{videoURL:'https://www.youtube.com/embed/V_ESIzSmoCc',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:.2, quality:'default'}"
          /> */}
          {/* <div className="video-bg">
            <iframe src="https://www.youtube.com/embed/9QV4kVLnVXk?autoplay=1&mute=1&controls=0" title="Monkidex Website Demo" frameborder="0"></iframe>
          </div> */}

          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, my name is</h6>
                  <h1 className="font-alt">Lucas Jessop</h1>
                  <p className="lead">
                    <TypingAnimation />
                  </p>
                  <p className="desc">
                    {`I'm`} a Full-stack developer with experience in front-end
                    and back-end development, cloud infrastructure, and quality
                    assurance. Skilled in Javascript libraries like React, and
                    NodeJS. As well as experience using PostgreSQL, and services
                    inside of AWS. Passionate about clean code, scalable
                    applications, and continuous learning.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#contactus">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <Image
                    layout="responsive"
                    height={100}
                    width={100}
                    src="/static/img/home-banner.png"
                    title=""
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />

      <Contact />

      <EducationAndSkills />

      <Experience />
      {/* End about us */}
      {/* Portfolio */}
      <Portfolio />
      <Videos />
      {/* End Portfolio */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
    </Layout>
  );
};
export default IndexVideo;
