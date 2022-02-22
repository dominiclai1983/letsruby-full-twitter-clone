import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './layout';
import Signup from './signup';
import Login from './login';

import './home.scss';

const Home = () => (
  <React.Fragment>
    <i class="fab fa-twitter fa-5x"></i>
    <h1>Happening now</h1>
    <h3>Join Twitter today.</h3>
    <Link to="/signup">
      <button type="button" className="btn btn-primary btn-lg btn-block">Sign up with email</button>
    </Link>
    <h5>Already have an account?</h5>
    <Link to="/login"> 
      <button type="button" class="btn btn-secondary btn-lg btn-block">Sign in</button>
    </Link>      
  </React.Fragment>
)

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})