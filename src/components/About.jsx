import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactModal from "./Contact/ContactModal";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(() => !showModal);
  };

  return (
    <div className='layout'>
      <h1 className='main-title'>About me</h1>
      <p>
        I've been in the software industry professionally since 2015 and a
        website tinkerer since 1997. I made a bunch of geocities websites back
        in the day for gaming groups and have had an interest in how UI/UX
        affects our experience with the internet since then.
      </p>
      <p>
        I live in the Bay Area with my lovely wife, two amazing kids, and two
        loveable dogs.
      </p>
      <p>
        I'm an avid gamer, including video games and table top games like D&D.
      </p>
      <a href='#' onClick={toggleModal}>
        Contact Me
      </a>
      {showModal && (
        <ContactModal
          showModal={showModal}
          handleClose={toggleModal}
          toast={toast}
        />
      )}
      <ToastContainer />
    </div>
  );
}
