import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

export const Question = ({text}) => {
  const [answer, setAnswer] = useState("symbolQuestion");
   
    return (
    <div className="question">
      <QuestionBody  answer={answer} text={text}/>
      <div className="question__options">
        <Option onSelected={setAnswer} type="smileyStrongYes" text="Souhlasím"/>
        <Option onSelected={setAnswer} type="smileyYes" text="Spíše souhlasím"/>
        <Option onSelected={setAnswer} type="smileyNeutral" text="Nevím"/>
        <Option onSelected={setAnswer} type="smileyNo" text="Spíše nesouhlasím"/>
        <Option onSelected={setAnswer} type="smileyStrongNo" text="Nesouhlasím"/>
      </div>
    </div>
  );
};
