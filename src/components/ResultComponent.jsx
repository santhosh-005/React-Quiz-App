import React, { Component } from "react";
import "./app.css";

export default class ResultComponent extends Component {
  render() {
    return (
      <div className="whole-page">
        <div id="center-div">
          <h1 style={{ color: "lightgreen" }}>Result</h1>
          <div id="result-board">
            <h3>You need practice more!</h3>
            <h1 style={{ color: "blue" }}>Your score is 20%</h1>

            <div className="results">
              <p>Totol number of questions</p>
              <p>15</p>
            </div>
            <div className="results">
              <p>Number of attempted questions</p>
              <p>14</p>
            </div>
            <div className="results">
              <p>Number of correct answers</p>
              <p>12</p>
            </div>
            <div className="results">
              <p>Number of wrong answers</p>
              <p>2</p>
            </div>
          </div>
          <div>
            <button style={{color:'blue',padding:'6px',margin:'10px'}}>Play again</button>
            <button style={{color:'green',padding:'6px',margin:'10px'}}>Back to home</button>
          </div>
        </div>
      </div>
    );
  }
}
