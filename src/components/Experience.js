import React from "react";

const data = {
  resumeData: [
    {
      jobTitle: "Frontend Software Engineer",
      activeJob: true,
      timeActive: "Aug 2022 - Present",
      location: "(Remote / Hybrid)",
      jobId: "explorogroup",
      company: "ExploroGroup",
      time: "Full Time",
      description: `As an essential part of the Exploro team, I'm responsible for creating compelling front-end interfaces using React, Next.js, Tailwind CSS, and Storybook. My focus is on seamlessly blending functionality with aesthetics to provide users with an immersive experience. I'm dedicated to crafting user-centric designs that leave a positive and lasting impression on our audience.`,
      image:
        "https://media.licdn.com/dms/image/D560BAQHsE93ovJ5-Uw/company-logo_100_100/0/1681417507318?e=1703116800&v=beta&t=ysukf45qWPDlITP4ZPRlmtnPkmT_DQBH4ahm2D_cGVo"
    },
    {
      jobTitle: "Scrum Master",
      activeJob: false,
      timeActive: "Aug 2022 - Jan 2023",
      location: "Hybrid",
      jobId: "explorogroup",
      company: "ExploroGroup",
      time: "Full Time",
      description: `As the dynamic leader of our development team at Exploro, I orchestrate bi-weekly sprints and foster collaborative morning meetings. Guided by Agile methodologies and supported by Jira, we efficiently plan and execute projects. Our teamwork and Agile practices have yielded remarkable results, making our small yet potent team an asset to Exploro's success. Together, we champion innovation, celebrate creativity, and consistently exceed expectations. Our commitment to continuous improvement drives excellence across our development process.`,
      image:
        "https://media.licdn.com/dms/image/D560BAQHsE93ovJ5-Uw/company-logo_100_100/0/1681417507318?e=1703116800&v=beta&t=ysukf45qWPDlITP4ZPRlmtnPkmT_DQBH4ahm2D_cGVo"
    },
    {
      jobTitle: "Video Editor",
      activeJob: true,
      timeActive: "July 2017 - Present",
      location: "Remote",
      jobId: "freelance",
      company: "Video Editor",
      time: "Part Time",
      description: `As a skilled video editor specializing in Adobe Premiere Pro, I excel in the art of visual storytelling. My work involves crafting compelling narratives that captivate and inspire audiences. I value collaboration, actively seeking input from peers to enhance my projects. With meticulous attention to detail and a commitment to continuous improvement, I consistently deliver high-quality video content that resonates with viewers and contributes to the overall success of each project.`,
      image:
        "https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?w=826&t=st=1695192577~exp=1695193177~hmac=09701aff9ef705455414018dd16d153644b78ced6bf2b4658b40bd14b2291fe5"
    },
    {
      jobTitle: "Stage Technician",
      activeJob: false,
      timeActive: "Jan 2021 - Sep 2022",
      location: "On-Site",
      jobId: "hale-centre-theatre",
      company: "Hale Centre Theatre",
      time: "Part Time",
      description: `As a Stage Technician at Hale Center Theatre, I foster a harmonious and collaborative work environment by encouraging open communication and valuing every team member's input. I am dedicated to root cause problem solving and constantly seek innovative solutions to improve our work processes and company culture. My proactive approach contributes significantly to creating a positive and enriching experience for both crew members and the overall success of Hale Center Theatre.`,
      image:
        "https://cdn.theorg.com/f68e410b-31fa-43c7-9178-d554562f0ab5_thumb.jpg"
    },
    {
      jobTitle: "Spotlight Operator",
      activeJob: false,
      timeActive: "Nov 2020 - Jan 2021",
      location: "On-Site",
      jobId: "hale-centre-theatre",
      company: "Hale Centre Theatre",
      time: "Part Time",
      description: `In my role as a Spotlight Operator at Hale Center Theatre, I strive to cultivate a cooperative and cohesive work atmosphere by promoting transparent communication and respecting the contributions of each team member. I am committed to identifying the underlying causes of challenges and consistently explore creative solutions to enhance our operational procedures and reinforce our company's culture. My proactive stance significantly contributes to fostering a favorable and enriching environment for crew members and ultimately contributes to the overall success of Hale Center Theatre.`,
      image:
        "https://cdn.theorg.com/f68e410b-31fa-43c7-9178-d554562f0ab5_thumb.jpg"
    }
  ]
};

function Experience() {
  return (
    <section
      id="Experience"
      data-nav-tooltip="Experience"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          {data.resumeData.map((item, index) => (
            <div className="resume-row" key={index}>
              <div className="row">
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <div style={{ display: "flex" }}>
                      <div
                        className="rb-left"
                        style={{
                          objectFit: "cover",
                          minWidth: "50px",
                          height: "50px",
                          backgroundPosition: "center",
                          backgroundSize: "50px",
                          borderRadius: "50%",
                          backgroundRepeat: "no-repeat",
                          backgroundImage: `url(${item.image})`,
                          marginRight: "20px"
                        }}
                      ></div>
                      <div>
                        <h6>{item.jobTitle}</h6>
                        <label>
                          {item.company} | {item.location} |{" "}
                          <span
                            style={{
                              color: item.timeActive.includes("Present")
                                ? "#2fbf71"
                                : "#fff"
                            }}
                          >
                            {item.timeActive}
                          </span>
                        </label>
                      </div>
                    </div>
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
}

export default Experience;
