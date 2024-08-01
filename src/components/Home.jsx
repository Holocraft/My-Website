import React from "react";
import { Link } from "react-router-dom";
import Michael from "../images/michael.jpg";

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
    </div>
  );
}
