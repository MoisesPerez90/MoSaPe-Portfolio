import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [errMessage, setErrMessage] = useState('');

  function handleInputChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  }

  function handleBlurEmail() {
    if (!email) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Email is not valid');
    } else {
      setEmailError('');
    }
  }

  function handleBlurUserName() {
    if (!userName) {
      setUserNameError('Username is required');
    } else {
      setUserNameError('');
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    if (emailError || userNameError) {
      setErrMessage('Please fill out all required fields');
      return;
    }

    window.alert(
      `Thank you for your message ${userName}, I'll looking forward to contact you later `
    );

    setEmail('');
    setUserName('');
  }

  return (
    <div className="container d-flex flex-column m-5">
      <h2>Contact Form</h2>
      <p>Hello {userName}</p>
      <form>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address:{' '}
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlurEmail}
            type="email"
            placeholder="name@example.com"
            className="form-control"
          />
          {emailError && <div className="error-text">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username:{' '}
          </label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            onBlur={handleBlurUserName}
            type="text"
            placeholder="Username"
            className="form-control"
          />
          {userNameError && (
            <div className="error-text">{userNameError}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message:{' '}
          </label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleSubmitForm}
        >
          Submit
        </button>
      </form>
      {errMessage && (
        <div>
          <p className="error-text">{errMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;


