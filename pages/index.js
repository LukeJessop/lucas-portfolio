import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
import TypingAnimation from "../src/components/TypingAnimation";
import Image from "next/image";
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
                    I Am A <TypingAnimation />
                  </p>
                  <p className="desc">
                    {`I'm`} a Full-Stack Developer from Draper, Utah with over 3
                    years of experience. After I graduated at Alta High School,
                    I attented Devmountain. Which taught me full stack web
                    development. I now code and create amazing web elements for
                    amazing people around the world. Using Adobe Premiere Pro
                    For the past 6 years, I would create{" "}
                    <a href="https://www.youtube.com/channel/UChaN9QPqE1a5tqPCfbN3zGw">
                      youtube
                    </a>{" "}
                    videos in my free time.
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
      {/* End about us */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default IndexVideo;
