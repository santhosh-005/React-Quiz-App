import React, { Component } from "react";
import "./app.css";
import quizQuestion from "./resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentQues: 1,
      preBtnState: false,
      nextBtnState: true,
    };
  }

  handlePrevious = () => {
    this.state.currentQues > 1
      ? this.setState({
          currentQues: this.state.currentQues - 1,
          nextBtnState: true,
        })
      : this.setState({ preBtnState: false });
  };

  handleNext = () => {
    this.state.currentQues !== quizQuestion.length
      ? this.setState({
          currentQues: this.state.currentQues + 1,
          preBtnState: true,
        })
      : this.setState({ nextBtnState: false });
  };

  handleQuit = () => {
    confirm("Are you sure to quit a question") ? this.handleNext() : null;
  };

  render() {
    return (
      <div className="whole-page">
        <div id="whitebox">
          <h1>Question</h1>
          <p>{this.state.currentQues} of 15</p>
          <h3>{quizQuestion[this.state.currentQues - 1].question}</h3>
          <div id="answer-box">
            <button>{quizQuestion[this.state.currentQues - 1].optionA}</button>
            <button>{quizQuestion[this.state.currentQues - 1].optionC}</button>
            <button>{quizQuestion[this.state.currentQues - 1].optionD}</button>
            <button>{quizQuestion[this.state.currentQues - 1].optionB}</button>
          </div>
          <div id="option-box">
            <button
              style={{
                backgroundColor: "#3E7DAA",
                cursor:
                  this.state.preBtnState == false ? "not-allowed" : "pointer",
              }}
              onClick={this.handlePrevious}
              id="preBtn"
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "green",
                cursor:
                  this.state.nextBtnState == false ? "not-allowed" : "pointer",
              }}
              onClick={this.handleNext}
            >
              Next
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={this.handleQuit}
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
