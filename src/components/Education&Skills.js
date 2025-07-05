import { Fragment } from "react";

const data = {
  educationData: [
    {
      date: "2020-2021",
      title: "Student Developer",
      company: "Devmountain"
    },
    {
      date: "2024-PRESENT",
      title: "Animation & Game Development",
      company: "Utah Valley University"
    },
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
          <div className="col-lg-7 m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a web developer with a deep knowledge of React,
                Node.js, CSS, JavaScript, and HTML, which enables me to create
                functional and visually appealing websites. I have recently started my bachelors in Animation & Game development at
                Utah Valley University. 
                Both my experience as a Web Developer and as a student in college has really helped
                me learn a lot about programming.  
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};
export default EducationAndSkills;
