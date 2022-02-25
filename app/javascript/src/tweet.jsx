import React from 'react'
import ReactDOM from 'react-dom'

const Tweet = () => {
  return (
    <React.Fragment>This is my tweet</React.Fragment>
  )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Tweet />,
      document.body.appendChild(document.createElement('div')),
    )
  })