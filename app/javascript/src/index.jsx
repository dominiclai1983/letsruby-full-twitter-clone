import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './layout';
import Home from './home';

const Index = () => {
  return (
    <BrowserRouter>
      <Layout>
        <h2>testing</h2>
      </Layout>
    </BrowserRouter>
  )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Index />,
      document.body.appendChild(document.createElement('div')),
    )
  })