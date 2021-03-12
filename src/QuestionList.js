import QuestionsData from './QuestionsData'
import QuestionBox from './QuestionBox';

import React, {Component} from 'react';
import {shuffleArray} from './Utils';

class QuestionList extends Component{
    state = {
        questionsData: null
    };
    componentDidMount() {
        this.setState({questionsData: shuffleArray(QuestionsData)});
    }

    render(){
        return (<section id="questions">
            <div className="container">
            {this.state.questionsData && this.state.questionsData
                .map((v,i)=> <QuestionBox key={i} displayed={v.text.toLowerCase().indexOf(this.props.searchTerm)>=0} question={v}/>)}
            </div></section>);

    }
}

export default QuestionList;