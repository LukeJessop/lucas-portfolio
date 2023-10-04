import { Fragment } from "react";

const data = {
  educationData: [
    {
      date: "Nov, 2020 - Jan, 2021",
      title: "Student Developer",
      company: "Devmountain"
    },
    {
      date: "2017-2023",
      title: "Video Editor",
      company: "Self Propelled Learning"
    }
  ],
  skillsData: [
    { skill: "React", width: "92%" },
    { skill: "JavaScript", width: "90%" },
    { skill: "CSS", width: "86%" },
    { skill: "Node.js", width: "75%" },
    { skill: "Premiere Pro", width: "89%" }
  ]
};

const EducationAndSkills = () => {
  return (
    <section
      id="EducationAndSkills"
      data-nav-tooltip="EducationAndSkills"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
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
      </div>
    </section>
  );
};
export default EducationAndSkills;
