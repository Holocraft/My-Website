import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHouse,
  faCode,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AnvilIcon from "../../assets/anvil-icon";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function NavBar({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className={`${isDarkMode ? "dark-mode" : ""}`}>
        <ul className='nav-list'>
          <li
            className={`${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}
          >
            <NavLink exact to='/'>
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li
            className={`${activeTab === "about" ? "active" : ""}`}
            onClick={() => handleTabClick("about")}
          >
            <NavLink to='/about'>
              <FontAwesomeIcon icon={faAddressCard} />
            </NavLink>
          </li>
          <li
            className={`${activeTab === "projects" ? "active" : ""}`}
            onClick={() => handleTabClick("projects")}
          >
            <NavLink to='/projects'>
              <FontAwesomeIcon icon={faCode} />
            </NavLink>
          </li>
          <li
            className={`${activeTab === "blog" ? "active" : ""}`}
            onClick={() => handleTabClick("blog")}
          >
            <NavLink to='/thoughts'>
              <FontAwesomeIcon icon={faBlog} />
            </NavLink>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </>
  );
}
