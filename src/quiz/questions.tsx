import { CheckCircleOutline } from "@mui/icons-material";
import React, { Dispatch, SetStateAction } from "react";
import { questions } from "./questionsData";

export const ROLES = {
  CHEF: "Kock: Trappan och Kollektivet",
  DJ: "DJ: Trappan",
  HOST: "Värd/garderob: Trappan, Kollektivet",
  BAR: "Bar: Trappan, Kollektivet",
  HG: "HG: Flexibel, boka själv",
  MF: "MF: Kårhouse, Trappan",
  Link: "Linköping",
  Norr: "Norrköping",
} as const;

export const ROLES_LINKOPING = {
  CHEF: "Kock: Kollektivet",
  DJ: "DJ: Kollektivet",
  HOST: "Värd/garderob: Kollektivet",
  BAR: "Bar: Kollektivet",
  HG: "HG: Flexibel, boka själv",
  MF: "Marknadsföring - MF Kårhouse",
} as const;

export const ROLES_NORRKOPING = {
  CHEF: "Kock: Trappan",
  DJ: "DJ: Trappan",
  HOST: "Värd/garderob: Trappan",
  BAR: "Bar: Trappan",
  HG: "HG: Flexibel, boka själv",
  MF: "Marknadsföring - MF Kårhouse",
} as const;

type ObjectValues<T> = T[keyof T];
export type Roles = ObjectValues<typeof ROLES>;


export interface Question {
  question: string;
  answers: Array<{
    text: string;
    picture: string;
    roles: Array<Roles>;
    url?: string;
    textColor?: string;
    location?: string;
  }>;
}

interface QuestionProps {
  question: Question;
  answers: Array<[string, Array<Roles>]>;
  setAnswers: Dispatch<SetStateAction<[string, Array<Roles>][]>>
  index: number;
  onNext: (question: string, selectedRoles: Array<Roles>) => void;
}

export const QuestionComponent: React.FC<QuestionProps> = (props) => {
  const onAnswerClick = (answer: {
    text: string;
    picture: string;
    roles: Array<Roles>;
  }) => {
    props.onNext(props.question.question, answer.roles);
  };

  const colors = ['#f39b49']; //  ['#a6dae0', '#f39b49', '#FED931', '#eb7d5b']
  const backgroundColor = colors[props.index % colors.length];

  const selectedAnswerRoles = props.answers.find((entry) => entry[0] === props.question.question)?.[1];

  return (
    <div className="question">
      <div className="question-text" style={{ backgroundColor }}>
        <h3>{props.question.question}</h3>
      </div>
      <div className={`question-grid ${props.question.answers.length === 2 ? 'two-answers' : ''}`}>
        {props.question.answers.map((answer) => (
          <div
            key={answer.text}
            className="question-answer"
            onClick={() => onAnswerClick(answer)}
          >
            {answer.url && <img className="question-img" src={answer.url} />}
            <h4>{answer.text}</h4>
            {selectedAnswerRoles === answer.roles && (
              <div className="answered">
                <CheckCircleOutline fontSize="large"  />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};