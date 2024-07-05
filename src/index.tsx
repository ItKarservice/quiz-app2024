import React from 'react';
import ReactDOM from 'react-dom/client';
import { Quiz } from './quiz/quiz';


try {
  const quiz = ReactDOM.createRoot(
    document.getElementById('quiz') as HTMLElement
  );
  quiz.render(
    <Quiz/>
  );
} catch (error) {
  console.log("Can't find tag 'quiz'")
}

