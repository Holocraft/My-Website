import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { experience } from "./experience";
import { useTheme } from "../../ThemeContext";
import IconExternalLink from "../../assets/external-link-icon";

export default function Projects() {
  const { isDarkMode } = useTheme();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos();
  }, []);

  async function getRepos() {
    try {
      const response = await fetch(
        "https://api.github.com/users/holocraft/repos"
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='layout projects-page'>
      <div className='experience-wrapper'>
        <h1>Experience</h1>
        <div className='cards-wrapper'>
          {experience.map((exp) => {
            return (
              <a href={exp.url} target='_blank'>
                <div
                  key={exp.id}
                  className={`company-container ${
                    isDarkMode ? "dark-mode" : ""
                  }`}
                >
                  <div className='title-wrapper'>
                    <h2>{exp.title}</h2>
                    <IconExternalLink />
                  </div>
                  <p className='date'>{exp.date}</p>
                  <p dangerouslySetInnerHTML={{ __html: exp.body }} />
                  <div className='chip-wrapper'>
                    {exp.chips?.map((chip) => {
                      return <div className='chip'>{chip}</div>;
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className='projects-wrapper'>
        <h1>Projects</h1>
        <div className='cards-wrapper'>
          {repos?.map((repo, index) => {
            return <ProjectCard key={index} repo={repo} />;
          })}
        </div>
      </div>
    </div>
  );
}
