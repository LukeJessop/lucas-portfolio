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
                  I specialize in developing top-tier React projects that cater to various platforms, ensuring exceptional quality and user experiences.
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
                  I leverage Node.js and PostgreSQL to meticulously craft high-quality APIs, serving as robust data storage and retrieval systems for web applications.
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
                  Using ETC lighting software, I specialize in designing and creating mesmerizing light shows that seamlessly blend technical precision with artistic creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-lifesaver" />
              <div className="feature-content media-body">
                <h5>Video Editing</h5>
                <p>
                  {`I'm`} a proficient Adobe Premiere Pro video editor, adept at crafting engaging narratives and valuing collaboration for enhanced projects.
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
