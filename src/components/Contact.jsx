import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import { IoMdCall } from "react-icons/io";
import { motion } from "framer-motion";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Contact() {
  const [state, handleSubmit] = useForm("meqnbqao");
  if (state.succeeded) {
    return (
      <div className='contact-message'>
        <h1 className='contact-title'>Thanks for message!</h1>
        <Link to='/' className='button'>
          Back to home
        </Link>
      </div>
    );
  }
  <Helmet>
    <title>Contact</title>
  </Helmet>;
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    className='contact'>
      <div>
        <h1 className='contact-header'>Contact</h1>
        <div className='contact-container'>
          <div className='about-section'>
            <div className='row'>
              <div className='icon'>
                <MdOutlineAlternateEmail />
              </div>
              <div className='description'>
                <h1 className='title'>Email</h1>
                <a className='about' href='mailto:nihadbalakisiyev18'>
                  nihadbalakisiyev18@gmail.com
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='icon'>
                <GoLocation />
              </div>
              <div className='description'>
                <h1 className='title'>Location</h1>
                <p className='about'>Azerbaijan,Baku</p>
              </div>
            </div>
          </div>
          {/*-------------------------------------------------------------------------------------*/}
          <form onSubmit={handleSubmit}>
            <div className='row form__group field'>
              <input
                className='form__field'
                type='text'
                name='name'
                required=''
                id='full-name'
                placeholder='Full name'
              />
              <label className='form__label' htmlFor='full-name'>
                Full Name
              </label>
            </div>
            <div className='row form__group field'>
              <input
                className='form__field'
                id='email'
                required=''
                type='email'
                name='email'
                placeholder='Email Address'
              />
              <label className='form__label' htmlFor='email'>
                Email Address
              </label>
            </div>
            <div className='row form__group field'>
              <input
                className='form__field'
                type='text'
                required=''
                name='subject'
                id='subject'
                placeholder='Subject'
              />
              <label className='form__label' htmlFor='subject'>
                Subject
              </label>
            </div>
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <div className='row form__group field'>
              <textarea
                className='form__field'
                id='message'
                name='message'
                required=''
                placeholder='Message'
              />
              <label className='form__label' htmlFor='message'>
                Message
              </label>{" "}
            </div>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button className='cta'>
              <span>Send</span>
              <svg viewBox='0 0 13 10' height='10px' width='15px'>
                <path d='M1,5 L11,5'></path>
                <polyline points='8 1 12 5 8 9'></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
