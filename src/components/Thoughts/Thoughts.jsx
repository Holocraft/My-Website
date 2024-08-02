import React from "react";
import { thoughts } from "./thoughts-data";
import { useTheme } from "../../ThemeContext";

export default function Thoughts() {
  const { isDarkMode } = useTheme();
  return (
    <div className='layout'>
      <h1>Thoughts</h1>
      {thoughts.map((thought) => {
        return (
          <div
            key={thought.id}
            className={`thought-wrapper ${isDarkMode ? "dark-mode" : ""}`}
          >
            <h2 className='thought-title'>{thought.title}</h2>
            <div className='line' />
            <p className='date'>{thought.date}</p>
            <div dangerouslySetInnerHTML={{ __html: thought.body }} />
          </div>
        );
      })}
    </div>
  );
}
