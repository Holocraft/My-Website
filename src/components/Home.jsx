import React from "react";
import { Link } from "react-router-dom";
import Michael from "../images/michael.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className='layout'>
      <img src={Michael} alt='Michael' />
      <h1>Hi, I'm Michael</h1>
      <p>
        I'm a software engineer who loves creating and learning everything UI/UX
        related.
      </p>
      <p>
        Feel free to browse around the site. I post past{" "}
        <Link to='projects'>projects</Link>, my{" "}
        <Link to='thoughts'>thoughts</Link> on software, gaming, or anything
        else I'm interested in.
      </p>
      <div className='icons'>
        <a
          href='https://github.com/Holocraft'
          rel='noopener noreferrer'
          target='_blank'
          className='github'
        >
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a
          href='https://www.linkedin.com/in/michaelrsmith10/'
          rel='noopener noreferrer'
          target='_blank'
          className='linkedin'
        >
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a
          href='https://www.instagram.com/mikiersmith/'
          rel='noopener noreferrer'
          target='_blank'
          className='instagram'
        >
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
      </div>
    </div>
  );
}
