import React, { Component } from "react";
import "./app.css";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="whole-page">
        <div id="whitebox">
          <h1>Question</h1>
          <p>1 of 15</p>
          <h3>Which is the only mammal that can jump?</h3>
          <div id="answer-box">
            <button>Dog</button>
            <button>Elephant</button>
            <button>Goat</button>
            <button>Lion</button>
          </div>
          <div id="option-box">
            <button style={{backgroundColor:'#3E7DAA'}}>Previous</button>
            <button style={{backgroundColor:'green'}}>Next</button>
            <button style={{backgroundColor:'red'}}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
