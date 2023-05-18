import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacao } from './navegacao';
import './loginstyle.css';
import './style.css';
import Logogoogle from './componentes/imgs/Google.png';
import stereo from './componentes/imgs/stereo.png'
import { Password } from 'primereact/password';
import { useRef, useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    }).then(res => {
      navigate('/');
    }).catch(error => {
      console.error(error);
      setErrMsg(error.response?.data);
    })
  }

  return (

    <>

      <section>
        <Navegacao />
        <div style={{ background: "#0E243B" }}>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
          <div className="featured-image mb-3">
            <img src="images/1.png" className="img-fluid" style={{ width: "250px" }} alt="featured" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}>Be Verified</p>
          <small className="text-white text-wrap text-center" style={{ width: "17rem", fontFamily: "'Courier New', Courier, monospace" }}>Join experienced Designers on this platform.</small>
        </div>
        <div className="col-md-6 right-box d-flex flex-column justify-content-center">
          <div className="header-text mb-4 text-center">
            <h2>Hello, Again</h2>
            <p>We are happy to have you back.</p>
          </div>
          <input type="text" className="form-control form-control-lg bg-light fs-6 mb-3" placeholder="Email address" />
          <input type="password" className="form-control form-control-lg bg-light fs-6 mb-3" placeholder="Password" />
          <div className="d-flex justify-content-between mb-5">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="formCheck" />
              <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
            </div>
            <div className="forgot">
              <small><a href="#">Forgot Password?</a></small>
            </div>
          </div>
          <button className="btn btn-lg btn-primary w-100 fs-6 mb-3">Login</button>
          <button className="btn btn-lg btn-light w-100 fs-6 mb-3">
            <img src="images/google.png" style={{ width: "20px" }} className="me-2" alt="Google" />
            <small>Sign In with Google</small>
          </button>
          <div className="row">
            <small>Don't have an account? <a href="#">Sign Up</a></small>
          </div>
        </div>
      </div>
    </div>
        </div>
      </section>
    </>
  );
}



// // @media screen and (max-width: 1000px) {
//   .form_container{
//     width:45%;
//   }
// }

// @media screen and (max-width: 700px) {
//   .form_container{
//     width: 
//   }

