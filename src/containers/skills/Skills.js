import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Left Column - Title and Icons */}
        <Fade left duration={1000}>
          <div className="skills-left">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>
            <SoftwareSkill />
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-right">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            
            {/* Bullet points for skills */}
            <ul className="skills-list">
              {skillsSection.skills.map((skill, i) => (
                <li key={i} className={isDark ? "dark-mode skills-text" : "skills-text"}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Fade>

      </div>
    </div>
  );
}
