import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";
import { useTheme } from "../../ThemeContext";

export default function ContactModal({ showModal, handleClose, toast }) {
  const modalRef = useRef();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
      modalRef.current.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, handleClose]);

  if (!showModal) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          handleClose();
          toast.success("Message successfully sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDarkMode ? "light" : "dark",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className='contact-modal'>
      {loading && (
        <div className='loading-spinner'>
          <Oval
            visible={true}
            height='80'
            width='80'
            color='#3f3844'
            secondaryColor='#6c686e'
            ariaLabel='oval-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </div>
      )}
      <div className='contact-wrapper' tabIndex={-1} ref={modalRef}>
        <div onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <h2 className='contact-me'>Let's Connect!</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='to_name' />
          <label>Email</label>
          <input type='email' name='from_name' />
          <label>Message</label>
          <textarea name='message' rows={8} />
          <input type='submit' value='Send' className='button' />
        </form>
      </div>
    </div>
  );
}
