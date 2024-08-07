import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";
import { useTheme } from "../../ThemeContext";

export default function ContactModal({ showModal, handleClose, toast }) {
  const { isDarkMode } = useTheme();
  const modalRef = useRef();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });

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

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

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
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      toast.error("Failed to send the message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDarkMode ? "light" : "dark",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.to_name.trim()) {
      newErrors.to_name = "Name is required.";
    }

    if (!formValues.from_name.trim()) {
      newErrors.from_name = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.from_name)) {
      newErrors.from_name = "Email is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
          <label htmlFor='to_name'>Name</label>
          <input
            type='text'
            name='to_name'
            value={formValues.to_name}
            onChange={handleInputChange}
          />
          {errors.to_name && <span className='error'>{errors.to_name}</span>}
          <label htmlFor='from_name'>Email</label>
          <input
            type='email'
            name='from_name'
            value={formValues.from_name}
            onChange={handleInputChange}
          />
          {errors.from_name && (
            <span className='error'>{errors.from_name}</span>
          )}
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            rows={8}
            value={formValues.message}
            onChange={handleInputChange}
          />
          <input type='submit' value='Send' className='button' />
        </form>
      </div>
    </div>
  );
}
