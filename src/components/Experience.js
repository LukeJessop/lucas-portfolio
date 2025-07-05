import React from "react";

const data = {
  resumeData: [
    {
      jobTitle: "Web Designer / Laser & CMM  Programmer / Assistant IT",
      activeJob: true,
      timeActive: "2023 - Present",
      location: "(On SIte)",
      jobId: "ferreusindustries",
      company: "Ferreus Industries",
      time: "Full Time",
      description: `Having many titles at this company, I am responsible for a few things. I was initially hired on as a Coordinate Measurement Machine (CMM) Programmer/Operator. I had to learn a whole concept "Geometrical Dimensioning & Tolerancing" within a few months.
      After mastering the programming aspect, I was able to train someone else into the position with me! After that I used my web design skills to redesign their website. Once the website was finished, I went on to learn how to program jobs on the laser. I have learned a lot working at Ferreus Industries.`,
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEX/////8/L/+/v87evydHHtFRTpAADuAADtAADsAAD3wMDwOjbtDAv3xMT4zMvsPDntVVXxdXXzfHryfoDyh4X62tn3ra3tLyzuW1XuSUr4qab7xMP8w8PuJB7wSEfyVFHwa2r3op/wKyf5urvyl5j45eb6t7f43NvrFRiAq5rNAAAAwElEQVR4Ab3PVQLCMBRE0VTfTHB31/2vkEaA+h/cek8lUT8uKBe+JYqTVECmKT877U1TOtIthp6zPrsclDBNPFK6GAi+kUTXoUa3K8NOZ/RuPMl205nFOTNcLFVtBrmYNaOs1hvXdutP8m9KShvMksXcm7mpJPYUX+zu9nAEHI474IP2tvhOo+HgPNqBocULjV31xda/qUugVP/i3xSDDVO502C/HrW0YB8GH/W4eWaIhjdvbf98QMAmDG+mUP2tF66XEbGFhSrrAAAAAElFTkSuQmCC",
    },
    {
      jobTitle: "Software Engineer / Scrum Master",
      activeJob: true,
      timeActive: "2022 - 2023",
      location: "(Remote / Hybrid)",
      jobId: "explorogroup",
      company: "ExploroGroup",
      time: "Full Time",
      description: `Was an essential part of the Exploro team, responsible for creating compelling front-end interfaces using React, Next.js, Tailwind CSS, and Storybook. 
      Focusing on seamlessly blending functionality with aesthetics to provide users with an immersive experience. 
      I'm dedicated to crafting user-centric designs that leave a positive and lasting impression on our audience.
      I also was the Scrum leader of our development team at Exploro, I orchestrated bi-weekly sprints and foster collaborative morning meetings.
      Guided by Agile methodologies and supported by Jira, we efficiently planned and executed projects. 
      Our teamwork and Agile practices yielded remarkable results, making our small yet potent team an asset to Exploro's success. 
      Together, we champion innovation, celebrate creativity, and consistently exceed expectations. Our commitment to continuous improvement drives excellence across our development process.`,
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQHsE93ovJ5-Uw/company-logo_200_200/company-logo_200_200/0/1681417507770/exploro_group_logo?e=1756944000&v=beta&t=wa-_oyM2Ku1CMy4lU1IFqyKIIHHUtEvZFVWPSHEp2Bk",
    },
    {
      jobTitle: "Video Editor",
      activeJob: true,
      timeActive: "2017-Present",
      location: "Remote",
      jobId: "freelance",
      company: "Video Editor",
      time: "Part Time",
      description: `As a skilled video editor specializing in Adobe Premiere Pro, I excel in the art of visual storytelling. My work involves crafting compelling narratives that captivate and inspire audiences. I value collaboration, actively seeking input from peers to enhance my projects. With meticulous attention to detail and a commitment to continuous improvement, I consistently deliver high-quality video content that resonates with viewers and contributes to the overall success of each project.`,
      image:
        "https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?w=826&t=st=1695192577~exp=1695193177~hmac=09701aff9ef705455414018dd16d153644b78ced6bf2b4658b40bd14b2291fe5",
    },
    {
      jobTitle: "Stage Technician / Spotlight Operator",
      activeJob: false,
      timeActive: "2020-2022",
      location: "On-Site",
      jobId: "hale-centre-theatre",
      company: "Hale Centre Theatre",
      time: "Part Time",
      description: `As a Stage Technician at Hale Center Theatre, I communicated with other technicians to help produce a show. 
      I was really good at problem solving and constantly seek innovative solutions to improve our work processes and company culture.
      My proactive approach significantly contributed to creating a positive and enriching experience for both crew members and the overall success of Hale Center Theatre.
      In my role as a Spotlight Operator at Hale Center Theatre, I strived to cultivate a cooperative and cohesive work atmosphere by promoting transparent communication and respecting the contributions of each team member.
      I was committed to identifying the underlying causes of challenges and consistently explore creative solutions to enhance our operational procedures and reinforce our company's culture.
       My proactive stance significantly contributes to fostering a favorable and enriching environment for crew members and ultimately contributes to the overall success of Hale Center Theatre.`,
      image:
        "https://cdn.theorg.com/f68e410b-31fa-43c7-9178-d554562f0ab5_thumb.jpg",
    },
  ],
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
                          marginRight: "20px",
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
                                : "#fff",
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
