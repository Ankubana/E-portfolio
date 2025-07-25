// src/components/Modal.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Shape from './Shapes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false)
 const toggleModal = () => {
  setIsModalOpen(prev => {
    const newState = !prev;
    document.body.classList.toggle('modal--open', newState);
    return newState;
 })};

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.init('Q63VDXPjxvoPPjL9C');
    try {
      await emailjs.sendForm('service_id', 'template_id', e.target);
      setSuccess(true);
      e.target.reset();
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <section  >
    
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title">Here is a bit about me</h3>
        <h4 className="modal__sub-title modal__sub-title--about">Frontend Software Engineer</h4>
        <p className="modal__par">
          I'm a <span className="orange">frontend software engineer</span> with a strong passion for developing websites with great <span className="orange">user experiences</span>.
          <br />
          I work on complex engineering problems with a talented team of developers every day.
        </p>
        {/* Add logos */}
      </div>

      <div className="modal__half modal__contact" id="contact">
        
       <button className="mail__btn modal__exit click" onClick={toggleModal} >
                <FontAwesomeIcon icon={faTimes}  />
       </button>
        
        <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
        <h3 className="modal__sub-title modal__sub-title--contact">I'm open to new opportunities.</h3>

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input className="input" name="user__name" type="text" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input className="input" name="user__email" type="email" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea className="textarea" name="user__message" required></textarea>
          </div>
          <button className="form__submit" type="submit">Send it my way</button>
        </form>

        {loading && <div className="modal__overlay modal__overlay--loading"><i className="fas fa-spinner"></i></div>}
        {success && <div className="modal__overlay modal__overlay--success">Thanks! I'll get back to you soon.</div>}
      </div>
    </div>
    </section>
  );
}

export default Modal;