import React from "react";
import { useTheme } from "../../ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div aria-label='theme-toggle'>
      <div className='toggle-container'>
        <input
          type='checkbox'
          id='check'
          className={`toggle ${isDarkMode ? "dark-mode" : ""}`}
          onChange={toggleTheme}
          checked={isDarkMode}
        />
        <label htmlFor='check' />
      </div>
    </div>
  );
}
