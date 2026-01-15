import "./about.css";
import ProfileImage from "../../assets/profile-pic.jpg";
import { Typewriter } from "react-simple-typewriter";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function About() {
  const text = `I’m a Frontend Developer with 1.5+ years of experience building
responsive and scalable web applications using ReactJS. I’ve worked on real-world
products in the edtech and startup space, focusing on clean UI, reusable components,
and seamless user experiences.

I enjoy translating designs into high-quality code, integrating APIs, and building
interfaces that feel intuitive and fast. I value simplicity, maintainability, and
thoughtful UI decisions, and I’m continuously learning to improve my craft and work
on modern, impactful products.`;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <img
            src={ProfileImage}
            alt="Pranavkumar Sawant"
            className="about-image"
          />

          <div className="about-intro">
            <div className="about-name">
              Pranavkumar <br /> Sawant
            </div>

            <p className="about-role">Frontend Developer · ReactJS</p>

            <div className="about-description-wrapper">
              <p className="about-description ghost">{text}</p>

              <p className="about-description typewriter">
                <Typewriter
                  words={[text]}
                  typeSpeed={35}
                  cursor
                  cursorStyle="|"
                  delaySpeed={1000}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h3 className="skills-title">Skills</h3>

          <Stack direction="row" spacing={2.5} useFlexGap flexWrap="wrap">
            {[
              "ReactJS",
              "JavaScript",
              "HTML",
              "CSS",
              "NodeJS",
              "Material UI",
              "REST API Integration",
              "Responsive Design",
              "Git",
              "MySQL",
              "Jest",
              "Figma",
              "Problem Solving",
              "Adaptability",
              "Teamwork",
              "Time Management",
              "BitBucket",
              "ExpressJS",
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,

                  color: "#353535",
                  backgroundColor: "#FFD60A",
                  border: "2px solid #001eff",

                  borderRadius: "12px",

                  boxShadow: "4px 4px 0px #0073df",

                  paddingX: "0.75rem",
                  paddingY: "0.35rem",

                  transition: "all 0.15s ease",

                  "&:hover": {
                    transform: "translate(4px, 4px)",
                    boxShadow: "0px 0px 0px #000000",
                    backgroundColor: "#cba900",
                  },

                  "&:active": {
                    transform: "translate(4px, 4px)",
                    boxShadow: "0px 0px 0px #000000",
                  },
                }}
              />
            ))}
          </Stack>
        </div>
      </div>
    </section>
  );
}

export default About;
