import Image from "next/image";
import barbieImg from "./assets/barbie-box.jpg";

const data = {
  educationData: [
    {
      date: "2022-2023",
      title: "Frontend Software Engineer",
      company: "Exploro Group",
    },
    {
      date: "2022-2023",
      title: "Scrum Master",
      company: "Exploro Group",
    },
    {
      date: "2022-2021",
      title: "Stage Technician",
      company: "Hale Centre Theatre",
    },
    {
      date: "2020-2021",
      title: "Full Stack Developer (student)",
      company: "Devmountain",
    },
    {
      date: "2017-2023",
      title: "Video Editor",
      company: "Freelance / Personal",
    },
  ],
  resumeData: [
    {
      jobTitle: "Frontend Software Engineer",
      company: "ExploroGroup | (Remote / Hybrid) | Aug 2022 - Present",
      time: "Full Time",
      description: `As an essential part of the Exploro team, I'm responsible for creating compelling front-end interfaces using React, Next.js, Tailwind CSS, and Storybook. My focus is on seamlessly blending functionality with aesthetics to provide users with an immersive experience. I'm dedicated to crafting user-centric designs that leave a positive and lasting impression on our audience.`,
      image:
        "https://media.licdn.com/dms/image/D560BAQHsE93ovJ5-Uw/company-logo_100_100/0/1681417507318?e=1703116800&v=beta&t=ysukf45qWPDlITP4ZPRlmtnPkmT_DQBH4ahm2D_cGVo",
    },
    {
      jobTitle: "Video Editor",
      company: "Freelance / Personal | Remote | July 2017 - Present",
      time: "Part Time",
      description: `As a skilled video editor specializing in Adobe Premiere Pro, I excel in the art of visual storytelling. My work involves crafting compelling narratives that captivate and inspire audiences. I value collaboration, actively seeking input from peers to enhance my projects. With meticulous attention to detail and a commitment to continuous improvement, I consistently deliver high-quality video content that resonates with viewers and contributes to the overall success of each project.`,
      image:
        "https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?w=826&t=st=1695192577~exp=1695193177~hmac=09701aff9ef705455414018dd16d153644b78ced6bf2b4658b40bd14b2291fe5",
    },
    {
      jobTitle: "Scrum Master",
      company: "ExploroGroup | Hybrid | Aug 2022 - Jan 2023",
      time: "Full Time",
      description: `As the dynamic leader of our development team at Exploro, I orchestrate bi-weekly sprints and foster collaborative morning meetings. Guided by Agile methodologies and supported by Jira, we efficiently plan and execute projects. Our teamwork and Agile practices have yielded remarkable results, making our small yet potent team an asset to Exploro's success. Together, we champion innovation, celebrate creativity, and consistently exceed expectations. Our commitment to continuous improvement drives excellence across our development process.`,
      image:
        "https://media.licdn.com/dms/image/D560BAQHsE93ovJ5-Uw/company-logo_100_100/0/1681417507318?e=1703116800&v=beta&t=ysukf45qWPDlITP4ZPRlmtnPkmT_DQBH4ahm2D_cGVo",
    },
    {
      jobTitle: "Stage Technician",
      company: "Hale Centre Theatre | On-Site | Nov 2020 - Sep 2022",
      time: "Part Time",
      description: `As a Stage Technician at Hale Center Theatre, I foster a harmonious and collaborative work environment by encouraging open communication and valuing every team member's input. I am dedicated to root cause problem solving and constantly seek innovative solutions to improve our work processes and company culture. My proactive approach contributes significantly to creating a positive and enriching experience for both crew members and the overall success of Hale Center Theatre.`,
      image:
        "https://cdn.theorg.com/f68e410b-31fa-43c7-9178-d554562f0ab5_thumb.jpg",
    },
  ],
  skillsData: [
    { skill: "React", width: "92%" },
    { skill: "JavaScript", width: "90%" },
    { skill: "CSS", width: "86%" },
    { skill: "Node.js", width: "75%" },
    { skill: "Premiere Pro", width: "89%" },
  ],
};

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
                  <Image layout="intrinsic" src={barbieImg} title="" alt="" />
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
                <h4>Need a Developer? {`I'm`} Your Guy!</h4>
                <p>
                  When it comes to web development, I have a myriad of tools
                  under my belt! This probably goes without saying, but I will
                  say it anyway! I develop my projects using Javascript. I am
                  extremely familiar with{" "}
                  <a target="_blank" rel="noreferrer" href="https://react.dev/">
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
                  in my projects because styling with it is just so quick! But I
                  also know CSS and{" "}
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
                  is my go-to. I also know a bit of SQL for database management.
                </p>
                <br />
                <br />
                <h4>Need a Video Editor? {`I'm`} Your Guy!</h4>
                <p>
                  I am very fluent in{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.adobe.com/products/premiere.html"
                  >
                    Premiere Pro
                  </a>
                  . I have made tons of videos for my less professional youtube
                  passion project{" "}
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
                <div className="btn-bar" style={{ display: "flex" }}>
                  <a
                    className="px-btn px-btn-theme"
                    href="#contactus"
                    style={{ minWidth: "0" }}
                  >
                    <span>Contact</span>
                  </a>
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
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              {data.educationData.map((item, index) => (
                <li key={index}>
                  <span>{item.date}</span>
                  <h6>{item.title}</h6>
                  <p>{item.company}</p>
                </li>
              ))}
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
              {data.skillsData.map((item, index) => (
                <div className="skill-lt" key={index}>
                  <h6>{item.skill}</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: item.width }}>
                      <span data-toggle="tooltip" title={item.width} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          {data.resumeData.map((item, index) => (
            <div className="resume-row" key={index}>
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div
                    className="rb-left"
                    style={{
                      objectFit: "cover",
                      backgroundPosition: "-20px",
                      backgroundSize: "200px",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>{item.jobTitle}</h6>
                    <label>
                      {item.company} | {item.date}
                    </label>
                    <div className="rb-time">{item.time}</div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
