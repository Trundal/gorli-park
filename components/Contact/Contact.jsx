import React, { useState } from 'react';
import axios from 'axios';

import styles from './Contact.module.css';

export default function contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xeqvjgwr',
      data: inputs,
    })
      .then((response) => {
        console.log(response);
        handleServerResponse(true, 'Thank you, your message has been submitted.');
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
    axios({
      method: 'POST',
      url: '/api/mail-backer.js',
      data: inputs,
    })
      .then((response) => console.log(response))
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>How can we help you?</h1>
      <form onSubmit={handleOnSubmit} className={styles.inputs}>
        <label htmlFor="full-name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          placeholder="First and Last"
          value={inputs.name}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          placeholder="sample@sample.smp"
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" onChange={handleOnChange} required value={inputs.message} />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
        </button>
      </form>
      {status.info.error && <div className="error">Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
}
