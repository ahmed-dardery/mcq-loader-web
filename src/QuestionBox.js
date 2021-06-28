import React, {Component} from 'react';

class QuestionBox extends Component{
    render(){
        const {qidx, onTrigger, question} = this.props;
        let good = null;
        if(question.answerIdx !== null) good = question.answerIdx === question.correct;

        const extraClassBox = good === null?"":good?" question-good":" question-bad";

        const extraClassRadio = i=>{
            let ans = "";
            if(good !== null){
                ans+="finish";
                if(question.answerIdx === i)
                    ans+= " selected";
                if(question.correct === i)
                    ans+=" correct";
            }
            return ans;
        };

        return (
            <div className={"question-box" + extraClassBox}>
                <h2 className="question">{question.text}</h2>
                {question.img && <img src={question.img} alt={"Exhibit"}/>}
                {question.options.map((v,i)=> <div key={i} onClick={()=>onTrigger(qidx, i)}>
                    <input className={extraClassRadio(i)} disabled={good !== null} type="radio"/>
                    <span>{v}</span>
                </div>)
                }
            </div>
        )
    }
}

export default QuestionBox;