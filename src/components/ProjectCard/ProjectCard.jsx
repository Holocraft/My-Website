import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RepoLinks from "../RepoLinks";
import { useTheme } from "../../ThemeContext";

export default function ProjectCard({ repo }) {
  const { isDarkMode } = useTheme();
  return (
    (
      <div className={`card-container ${isDarkMode ? "dark-mode" : ""}`}>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <div className='links'>
          {repo.homepage ? <RepoLinks text='Demo' url={repo.homepage} /> : null}
          <RepoLinks text='Source' url={repo.html_url} />
        </div>
      </div>
    ) || <Skeleton count={5} width={350} />
  );
}
