(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{31:function(e,t,n){e.exports=n(60)},36:function(e,t,n){},42:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(27),c=n.n(s),o=(n(36),n(7)),u=n(8),i=n(10),l=n(9),m=n(12),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"start-div"},r.a.createElement(m.b,{to:"/quiz"},r.a.createElement("button",{className:"start-button"},"Start new game")))}}]),n}(r.a.Component),h=(n(42),n(30)),w=n(29),p=n.n(w),f=(r.a.Component,function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).tickRef=Object(a.createRef)(),e.state={questionsAndAnswers:{},currentQuestion:"Loading",currentCorrectAnswer:"",currentIncorrectAnswers:[],currentAnswers:[],turn:-1,score:0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://opentdb.com/api.php?amount=10").then((function(t){e.setState({questionsAndAnswers:t.data.results}),console.log(e.state.questionsAndAnswers),e.nextRound()}))}},{key:"shuffle",value:function(e){return e.sort((function(){return Math.random()-.5}))}},{key:"buttonClicked",value:function(e){this.nextRound(),this.state.currentAnswers[e]==this.state.currentCorrectAnswer&&this.setState({score:this.state.score+1})}},{key:"nextRound",value:function(){var e=this;console.log(this.state.score),this.state.turn<9&&(this.setState({turn:this.state.turn+1}),setTimeout((function(){var t=e.state.questionsAndAnswers[e.state.turn].question;setTimeout((function(){e.setState({currentQuestion:t,currentIncorrectAnswers:e.state.questionsAndAnswers[e.state.turn].incorrect_answers,currentCorrectAnswer:e.state.questionsAndAnswers[e.state.turn].correct_answer}),e.setState({currentAnswers:e.shuffle([].concat(Object(h.a)(e.state.currentIncorrectAnswers),[e.state.currentCorrectAnswer]))}),console.log(e.state.currentAnswers),console.log(e.state.currentQuestion)}),25)}),30))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.turn<9&&r.a.createElement("div",null,r.a.createElement("img",{className:"tick",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/1200px-Green_tick.svg.png",ref:this.tickRef}),r.a.createElement("div",{className:"quiz-box"},r.a.createElement("div",{className:"quiz-question"},r.a.createElement("p",{className:"question"},this.state.currentQuestion)),r.a.createElement("div",{className:"quiz-answers"},r.a.createElement("div",{className:"answer",onClick:function(){return e.buttonClicked(0)}},r.a.createElement("button",{className:"letter"},"A"),r.a.createElement("p",{className:"answer-text"},this.state.currentAnswers[0])),r.a.createElement("div",{className:"answer",onClick:function(){return e.buttonClicked(1)}},r.a.createElement("button",{className:"letter"},"B"),r.a.createElement("p",{className:"answer-text"},this.state.currentAnswers[1])),this.state.currentIncorrectAnswers[2]&&r.a.createElement("div",{className:"answer",onClick:function(){return e.buttonClicked(2)}},r.a.createElement("button",{className:"letter"},"C"),r.a.createElement("p",{className:"answer-text"},this.state.currentAnswers[2])),this.state.currentIncorrectAnswers[2]&&r.a.createElement("div",{className:"answer",onClick:function(){return e.buttonClicked(3)}},r.a.createElement("button",{className:"letter"},"D"),r.a.createElement("p",{className:"answer-text"},this.state.currentAnswers[3]))))),this.state.turn>8&&r.a.createElement("div",null,r.a.createElement("p",{className:"end-p"},"Fin de la partida. Has acertado ",this.state.score," preguntas"),r.a.createElement("button",{className:"start-button",onClick:function(){window.location.reload(!1)}},"Start new game")))}}]),n}(r.a.Component)),v=n(1),E=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:d}),r.a.createElement(v.a,{exact:!0,path:"/quiz",component:f})))}}]),n}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.fadc4ebe.chunk.js.map