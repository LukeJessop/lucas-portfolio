import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Front End Web Development</h5>
                <p>
                  I specialize in developing top-tier React projects that cater
                  to various platforms, ensuring exceptional quality and user
                  experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Back End Web Development</h5>
                <p>
                  I leverage Node.js and PostgreSQL to meticulously craft
                  high-quality APIs, serving as robust data storage and
                  retrieval systems for web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-aperture" />
              <div className="feature-content media-body">
                <h5>Stage Lighting Design</h5>
                <p>
                  Using ETC lighting software, I specialize in designing and
                  creating mesmerizing light shows that seamlessly blend
                  technical precision with artistic creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={60}
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path
                  d="M 496 257 A 208 208 0 1 0 13 256 a 208 208 0 1 0 483 1 z M 0 256 a 256 256 0 1 1 512 0 A 256 256 0 1 1 0 256 z M 188.3 147.1 c 7.6 -4.2 16.8 -4.1 24.3 0.5 l 144 88 c 7.1 4.4 11.5 12.1 11.5 20.5 s -4.4 16.1 -11.5 20.5 l -144 88 c -7.4 4.5 -16.7 4.7 -24.3 0.5 s -12.3 -12.2 -12.3 -20.9 V 168 c 0 -8.7 4.7 -16.7 12.3 -20.9 z"
                  fill="#ffffff"
                />
              </svg>
              <div className="feature-content media-body">
                <h5>Video Editing</h5>
                <p>
                  {`I'm`} a proficient Adobe Premiere Pro video editor, adept at
                  crafting engaging narratives and valuing collaboration for
                  enhanced projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="separated" /> */}
        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
export default Services;
