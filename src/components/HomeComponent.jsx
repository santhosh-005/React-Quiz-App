import React, { Component } from 'react'
import './app.css'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='whole-page'>
        <div id="container">
            <h1>Quiz App</h1>
            <button>Play</button>
        </div>
      </div>
    )
  }
}
