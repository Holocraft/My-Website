import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
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
      <h1>Projects</h1>
      <div className='cards-wrapper'>
        {repos?.map((repo, index) => {
          return (
            <ProjectCard key={index} repo={repo} /> || (
              <Skeleton count={3} width={350} />
            )
          );
        })}
      </div>
    </div>
  );
}
