import QuestionsData from './QuestionsData'
import QuestionBox from './QuestionBox';

import React, {Component} from 'react';
import {shuffleArray} from './Utils';

function shuffle(question){
    if(!question.options){
        return {...question, options: ['True', 'False'], correct: question.ans?0:1, answerIdx:null};
    }else{
        const correct = question.correct || 0;
        const rightOne = question.options[correct];
        let temp = shuffleArray(question.options.filter((v,i)=>i!==correct));
        const idx = Math.floor(Math.random() * (question.options.length));
        temp.splice(idx, 0, rightOne);
        return {...question, options: temp, correct:idx, answerIdx:null};
    }
}

class QuestionList extends Component{
    state = {
        data: null
    };

    componentDidMount() {
        const arr = shuffleArray(QuestionsData);

        this.setState({data: arr.map(question=>shuffle(question))});
    }

    removeCorrect(){
        this.setState(({data})=>({data: shuffleArray(data.filter(q=>q.answerIdx!==q.correct).map(q=>shuffle(q)))}));
    }
    resetAllQuestions(){
        this.componentDidMount();
    }
    render(){
        const onTrigger = (questionIdx, answerIdx)=> {
            console.log(questionIdx, answerIdx);
            this.setState(({data})=>({data: [
                    ...data.slice(0,questionIdx),
                    {
                        ...data[questionIdx],
                        answerIdx
                    },
                    ...data.slice(questionIdx+1)
                ]}));
        };
        return (<section id="questions">

            <div className="container">
                {this.state.data && this.state.data.filter(v=>v.text.toLowerCase().indexOf(this.props.searchTerm)>=0)
                    .map((v,i)=> <QuestionBox onTrigger={onTrigger} key={i} qidx={i} question={v}/>)}
                <div className="container-button">
                    <div>
                        <button onClick={()=>this.removeCorrect()} className="button correct">Remove Correctly Answered Questions</button>
                    </div>
                    <div>
                        <button onClick={()=>this.resetAllQuestions()} className="button reset">Reset all questions</button>
                    </div>
                </div>
            </div></section>);

    }
}

export default QuestionList;