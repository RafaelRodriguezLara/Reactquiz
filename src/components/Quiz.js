import React, { createRef } from 'react';
import axios from 'axios';
import Answer from './Answer';
import { Link } from 'react-router-dom';

class Quiz extends React.Component{


  tickRef = createRef();

    state = {
        
    questionsAndAnswers: {},
    currentQuestion: 'Loading',
    currentCorrectAnswer: '',
    currentIncorrectAnswers: [],
    currentAnswers: [],

    turn:-1,
    score: 0
    }



    componentDidMount(){

        axios
          .get("https://opentdb.com/api.php?amount=10")
          .then((res) => {
            this.setState({
              questionsAndAnswers: res.data.results,
            });
            console.log(this.state.questionsAndAnswers);
            this.nextRound();
          });

    }


     shuffle(array) {
       return (
  array.sort(() => Math.random() - 0.5)
       );
}

buttonClicked(answers_index){

  this.nextRound();
  if(this.state.currentAnswers[answers_index]==this.state.currentCorrectAnswer){
    this.setState({
      score: this.state.score + 1
    });
  }
  
}




    nextRound(){
      console.log(this.state.score);

      if(this.state.turn<9){
      
                 this.setState({
                   turn: this.state.turn + 1,
                 });

                 setTimeout(()=>{

                  let currentQuestion = this.state.questionsAndAnswers[
                    this.state.turn
                  ].question;

                  setTimeout(()=>{

                                     this.setState({
                                       currentQuestion: currentQuestion,
                                       currentIncorrectAnswers: this.state
                                         .questionsAndAnswers[this.state.turn]
                                         .incorrect_answers,
                                       currentCorrectAnswer: this.state
                                         .questionsAndAnswers[this.state.turn]
                                         .correct_answer,
                                     });

                                     this.setState({
                                       currentAnswers: this.shuffle([
                                         ...this.state.currentIncorrectAnswers,
                                         this.state.currentCorrectAnswer,
                                       ]),
                                     });

                                     console.log(this.state.currentAnswers);
                                     console.log(this.state.currentQuestion);
                  },25);
 


                 }, 30);
        


        
    

        
                }
    }







    render(){
        return (
          <div>

          {this.state.turn<9 && 
  <div>

            <img className='tick' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/1200px-Green_tick.svg.png" ref={this.tickRef}></img>
            <div className="quiz-box">
              <div className="quiz-question">
                <p className="question">{this.state.currentQuestion}</p>
              </div>

              <div className="quiz-answers">
                <div className="answer" onClick={() => this.buttonClicked(0)}>
                  <button className="letter">A</button>
                  <p className="answer-text">{this.state.currentAnswers[0]}</p>
                </div>

                <div className="answer" onClick={() => this.buttonClicked(1)}>
                  <button className="letter">B</button>
                  <p className="answer-text">{this.state.currentAnswers[1]}</p>
                </div>

                {this.state.currentIncorrectAnswers[2] && (
                  <div className="answer" onClick={() => this.buttonClicked(2)}>
                    <button className="letter">C</button>
                    <p className="answer-text">
                      {this.state.currentAnswers[2]}
                    </p>
                  </div>
                )}

                {this.state.currentIncorrectAnswers[2] && (
                  <div className="answer" onClick={() => this.buttonClicked(3)}>
                    <button className="letter">D</button>
                    <p className="answer-text">
                      {this.state.currentAnswers[3]}
                    </p>
                  </div>
                )}
              </div>
            </div>
                  
                  </div>
                }

                {this.state.turn>8 &&
      <div>                
                  <p className='end-p'>Fin de la partida. Has acertado {this.state.score} preguntas</p>
                             
              <button className="start-button" onClick={()=>{window.location.reload(false)}}>Start new game</button>
            
            </div>
                }
          </div>
        );
    }

}

export default Quiz;