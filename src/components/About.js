const About = () => {
  return (
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
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Full-Stack Developer with over 3 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a Full-Stack Developer with over 3 years of
                  experience. {`I'm`} from Draper, Utah. I code and create
                  quality web elements for amazing people around the world.
                  During my free time I Like to create{" "}
                  <a href="https://www.youtube.com/channel/UChaN9QPqE1a5tqPCfbN3zGw">
                    youtube
                  </a>{" "}
                  videos.
                </p>
                {/* <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5</span>
                      <div className="media-body">
                        Youtube <br />
                        Subscribers
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022-2023</span>
                <h6>Frontend Software Engineer</h6>
                <p>Exploro Group</p>
              </li>
              <li>
                <span>2022-2023</span>
                <h6>Scrum Master</h6>
                <p>Exploro Group</p>
              </li>
              <li>
                <span>2022-2021</span>
                <h6>Stage Technician</h6>
                <p>Hale Centre Theatre</p>
              </li>
              <li>
                <span>2017-2023</span>
                <h6>Video Editor</h6>
                <p>Freelance / Personal</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a web developer with a passion for crafting dynamic and
                engaging digital experiences. I have a deep knowledge of React,
                Node.js, CSS, JavaScript, and HTML, which enables me to create
                functional and visually appealing websites. Additionally, I
                enjoy venturing into the world of video editing using Premiere
                Pro, allowing me to combine my technical expertise with my
                creative instincts. This dual skill set empowers me to bring
                ideas to life in both the web development and multimedia realms,
                making me a versatile and dynamic professional.
              </p>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Javascript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Node.js</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }}>
                    <span data-toggle="tooltip" title="75%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Premiere Pro</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "89%" }}>
                    <span data-toggle="tooltip" title="89%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left" style={{ objectFit: 'cover', backgroundPosition: '-20px', backgroundSize: '200px', backgroundRepeat: 'no-repeat',backgroundImage: 'url(https://media.licdn.com/dms/image/D560BAQHsE93ovJ5-Uw/company-logo_100_100/0/1681417507318?e=1703116800&v=beta&t=ysukf45qWPDlITP4ZPRlmtnPkmT_DQBH4ahm2D_cGVo)'}}></div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Frontend Software Engineer</h6>
                  <label>
                    ExploroGroup | (Remote / Hybrid) | Aug 2022 - Present
                  </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    As an essential part of the Exploro team, {`I'm`}{" "}
                    responsible for creating compelling front-end interfaces
                    using React, Next.js, Tailwind CSS, and Storybook. My focus
                    is on seamlessly blending functionality with aesthetics to
                    provide users with an immersive experience. {`I'm`}{" "}
                    dedicated to crafting user-centric designs that leave a
                    positive and lasting impression on our audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left" style={{ objectFit: 'cover', backgroundPosition: '-20px', backgroundSize: '200px', backgroundRepeat: 'no-repeat',backgroundImage: 'url(https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?w=826&t=st=1695192577~exp=1695193177~hmac=09701aff9ef705455414018dd16d153644b78ced6bf2b4658b40bd14b2291fe5)'}}></div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Video Editor</h6>
                  <label>
                    Freelance / Personal | Remote | July 2017 - Present
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    As a skilled video editor specializing in Adobe Premiere
                    Pro, I excel in the art of visual storytelling. My work
                    involves crafting compelling narratives that captivate and
                    inspire audiences. I value collaboration, actively seeking
                    input from peers to enhance my projects. With meticulous
                    attention to detail and a commitment to continuous
                    improvement, I consistently deliver high-quality video
                    content that resonates with viewers and contributes to the
                    overall success of each project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left" style={{ objectFit: 'cover', backgroundPosition: '-20px', backgroundSize: '200px', backgroundRepeat: 'no-repeat',backgroundImage: 'url(https://media.licdn.com/dms/image/D560BAQHsE93ovJ5-Uw/company-logo_100_100/0/1681417507318?e=1703116800&v=beta&t=ysukf45qWPDlITP4ZPRlmtnPkmT_DQBH4ahm2D_cGVo)'}}></div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Scrum Master</h6>
                  <label>ExploroGroup | Hybrid | Aug 2022 - Jan 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    As the dynamic leader of our development team at Exploro, I
                    orchestrate bi-weekly sprints and foster collaborative
                    morning meetings. Guided by Agile methodologies and
                    supported by Jira, we efficiently plan and execute projects.
                    Our teamwork and Agile practices have yielded remarkable
                    results, making our small yet potent team an asset to
                    {`Exploro's`} success. Together, we champion innovation,
                    celebrate creativity, and consistently exceed expectations.
                    Our commitment to continuous improvement drives excellence
                    across our development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left" style={{ objectFit: 'cover', backgroundPosition: '-20px', backgroundSize: '200px', backgroundRepeat: 'no-repeat',backgroundImage: 'url(https://cdn.theorg.com/f68e410b-31fa-43c7-9178-d554562f0ab5_thumb.jpg)'}}></div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Stage Technician</h6>
                  <label>
                    Hale Centre Theatre | On-Site | Nov 2020 - Sep 2022
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    As a Stage Technician at Hale Center Theatre, I foster a
                    harmonious and collaborative work environment by encouraging
                    open communication and valuing every team {`member's`}{" "}
                    input. I am dedicated to root cause problem solving and
                    constantly seek innovative solutions to improve our work
                    processes and company culture. My proactive approach
                    contributes significantly to creating a positive and
                    enriching experience for both crew members and the overall
                    success of Hale Center Theatre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
