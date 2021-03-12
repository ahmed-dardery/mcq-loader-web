import React, {Component} from 'react';

import {shuffleArray} from './Utils';

class QuestionBox extends Component{
    trigger(idx){
        if(this.state.answered !== -1) return;
        this.setState({answered: idx, good: (idx === this.state.correct)?1:0});
    }
    state = {
        options: [],
        correct: -1,
        answered: -1,
        good: -1
    };
    componentDidMount() {

        const {question} = this.props;
        if(!question.options){
            this.setState({options: ['True', 'False'], correct: question.ans?0:1});
        }else{
            let temp = shuffleArray(question.options.slice(1));
            const idx = Math.floor(Math.random() * (question.options.length));
            temp.splice(idx, 0, question.options[0]);
            this.setState({options: temp, correct:idx});
        }
    }

    render(){
        const {question,displayed} = this.props;
        const {answered, options, good,correct} = this.state;
        const extraClass = good===-1?"":good===1?"question-good":"question-bad";
        return (
            <div className={"question-box " + extraClass + " " + (!displayed&&"hidden")}>
                <h2 className="question">{question.text}</h2>
                {options.map((v,i)=> <div key={i} onClick={()=>this.trigger(i)}>
                    <input className={(answered!==-1&&"finish") + " " + (answered===i&&"selected") + " " + (answered!==-1&&i===correct&&"correct")} disabled={answered !== -1} type="radio"/>
                    <span>{v}</span>
                </div>)
                }
            </div>
        )
    }
}

export default QuestionBox;