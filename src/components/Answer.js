import React from "react";

export default class Answer extends React.Component {
  answer;
  isCorrect;
  letter;

  constructor(props) {
    super(props);
    this.answer = this.props.answer;
    this.isCorrect = this.props.isCorrect;
    this.letter = this.props.letter;
  }

  componentDidMount(){
      
  }

  render() {
    return (
      <div className="answer">
        <button className="letter">{this.letter}</button>
        <p className="answer-text">{this.answer}</p>
      </div>
    );
  }
}
