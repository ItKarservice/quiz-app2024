import React, { useEffect, useState } from "react";
import { QuestionComponent, ROLES, Roles, ROLES_LINKOPING, ROLES_NORRKOPING  } from "./questions";
import { questions } from "./questionsData";
//import './quiz.css';
import { runFireworks } from './fireworks';  // Import the fireworks function

export const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Array<[string, Array<Roles>]>>([]);
  const [result, setResult] = useState<Roles>();
  const [secondResult, setSecondResult] = useState<Roles>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rolePoints, setRolePoints] = useState<Record<string, number>>({});

  const [resultRole, setResultRole] = useState<Roles>();
  const [secondResultRole, setSecondResultRole] = useState<Roles>();
  
  const [location, setLocation] = useState<string | undefined>();
  


  
  useEffect(() => {
    if (answers.length !== questions.length) return;
  
    const result: Record<string, number> = {};
    Object.keys(ROLES).forEach((key) => (result[key] = 0));
    answers.forEach((answer) => {
      Object.entries(ROLES).forEach((entry) => {
        if (answer[1].includes(entry[1])) result[entry[0]] += 1;
      });
    });
  
    setRolePoints(result);
  
    const sortedResults = Object.entries(result).sort((a, b) => (b[1] as number) - (a[1] as number));
    const applicableRoles = result.Link === 1 ? ROLES_LINKOPING : result.Norr === 1 ? ROLES_NORRKOPING : ROLES;
  
  
    setLocation(result.Link === 1 ? "Link" : result.Norr === 1 ? "Norr" : undefined);
    
  setResultRole(sortedResults[0][0] as Roles); //Get the role, for example CHEF
  setSecondResultRole(sortedResults[1][0] as Roles);

    setResult(Object.entries(applicableRoles).find((entry) => entry[0] === sortedResults[0][0])?.[1] as Roles); //Get the role text for example: Kock: Kollektivet
    setSecondResult(Object.entries(applicableRoles).find((entry) => entry[0] === sortedResults[1][0])?.[1] as Roles);
  }, [answers]);

  useEffect(() => {
    if (result) {
      runFireworks();  // Trigger the fireworks when result is set
    } //test
  }, [result]);

  const handleNextQuestion = (question: string, selectedRoles: Array<Roles>) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const existingAnswerIndex = newAnswers.findIndex((answer) => answer[0] === question);
      if (existingAnswerIndex !== -1) {
        newAnswers[existingAnswerIndex] = [question, selectedRoles];
      } else {
        newAnswers.push([question, selectedRoles]);
      }
      return newAnswers;
    });
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="quiz">
      

      {/*
      <div className="selected-roles">
        <h3>Selected Roles:</h3>
        {Object.entries(rolePoints).map(([role, points]) => (
          <p key={role}>{`${ROLES[role as keyof typeof ROLES]}: ${points} points`}</p>
        ))}
      </div>
*/}

      {!result &&(
      <div className="navigation-buttons" style={{height: "40px"}}>
            {currentQuestionIndex > 0 ? (
              <button onClick={handlePreviousQuestion} className="nav-button">Back</button>
            ):(
              <div style={{ width: "70px"  }}/>
            )  
          }

          <div className="question-progress">
            <p>{`${currentQuestionIndex + 1} of ${questions.length}`}</p>
          </div>
            {currentQuestionIndex < answers.length ? (
              <button onClick={() => handleNextQuestion(questions[currentQuestionIndex].question, answers[currentQuestionIndex][1])} className="nav-button nav-next">Next</button>
            ):(
              <div style={{ width: "70px"  }}/>
            )  
            }
          </div>)
}

      {result === undefined && currentQuestionIndex < questions.length && (
        <div>
          <QuestionComponent
            key={questions[currentQuestionIndex].question}
            question={questions[currentQuestionIndex]}
            answers={answers}
            setAnswers={setAnswers}
            index={currentQuestionIndex}
            onNext={handleNextQuestion}
          />
          
        </div>
      )}
      
      
      
  

    



      {result && (
        <div className="result">
          <h2>{`Du skulle passa som - ${result}!`}</h2>
          
          
              
      {resultRole && resultRole.toString() === "HG" && (
      <div >
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEbK2CPvkKu6RRbYYYs-M-_jeeo_eysq5DGyj5Qib8XPx6Gw/viewform" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till HG {/*<span className="arrow">→</span> */}
          </a>
        
        <p>På Ryds herrgård får du prova på allt möjligt från att stå i baren till att rigga bandkväll. Det är ett grymt ställe för någon som gillar att ha på sig många olika hattar och alltid är redo att prova något nytt. Som engagerad får du också möjligheten att träffa folk från alla möjliga program och sektioner - Sök nu!</p>
         
        <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%",  height: 0 }}>
          <iframe
            src="https://giphy.com/embed/GT8ijp9izmINuZaVU5"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}

{resultRole &&  resultRole.toString() === "DJ" &&  (
      <div >
         {location ==="Link" ? (
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLOukjmTsZQ5_bzPBRXT7EMf7pRKMGbQOPEVx16W5e-IhB8A/viewform" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till KK {/*<span className="arrow">→</span> */}
          </a>
            ):(
          <a href="https://personal.trappan.nu/signUp.php" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till Trappan {/*<span className="arrow">→</span> */}
          </a>)}

          <p>Du styr spellistan på varje fest och har stenkoll på alla nya hits, det är klart du ska dela med dig av dina skills och få dansgolvet att svämma över! Engagera dig i Linköping på Kollektivet eller i Norrköping på Trappan - Sök nu!</p>
        <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%", marginTop: "14px", height: 0 }}>
          <iframe
            src="https://giphy.com/embed/108I3aT1o4WQ48"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}


{resultRole && resultRole.toString() === "BAR" &&  
(
      <div >
         {location ==="Link" ? (
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLOukjmTsZQ5_bzPBRXT7EMf7pRKMGbQOPEVx16W5e-IhB8A/viewform" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till KK {/*<span className="arrow">→</span> */}
          </a>
            ):(
          <a href="https://personal.trappan.nu/signUp.php" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till Trappan {/*<span className="arrow">→</span> */}
          </a>)}

          <p>Stresstålig borde vara ditt mellannamn, bakom baren får du utlopp för din driftighet och dina sociala förmågor. Engagera dig i Linköping på Kollektivet, eller på Trappan i Norrköping - Sök nu!</p>
          <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%", marginTop: "14px", height: 0 }}>
          <iframe
            src="https://giphy.com/embed/ZCr4jydtGyQkM0DOq2"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}




{resultRole && resultRole.toString() === "CHEF" &&  
(
      <div >
         {location ==="Link" ? (
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLOukjmTsZQ5_bzPBRXT7EMf7pRKMGbQOPEVx16W5e-IhB8A/viewform" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till KK {/*<span className="arrow">→</span> */}
          </a>
            ):(
          <a href="https://personal.trappan.nu/signUp.php" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till Trappan {/*<span className="arrow">→</span> */}
          </a>)}

          <p>Som kock får du använda din förmåga att hantera stress och utveckla ditt öga för detaljer. Du har en finsmakare inom dig och är en jäkel på team-work! Engagera dig i Linköping på Kollektivet, eller på Trappan i Norrköping - Sök nu!</p>
          <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%", marginTop: "14px", height: 0 }}>
          <iframe
            src="https://giphy.com/embed/13LlAxmDwAkopO"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}



{resultRole && resultRole.toString() === "HOST" &&  
(
        <div >
         {location ==="Link" ? (
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLOukjmTsZQ5_bzPBRXT7EMf7pRKMGbQOPEVx16W5e-IhB8A/viewform" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till KK {/*<span className="arrow">→</span> */}
          </a>
            ):(
          <a href="https://personal.trappan.nu/signUp.php" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till Trappan {/*<span className="arrow">→</span> */}
          </a>)}

          <p>Din karisma smittar av sig och du får folk att bli bekväma. Det sociala kommer naturligt för dig och du gör varje utekväll till ett minne för livet. Engagera dig i Linköping på Kollektivet eller i Norrköping på Trappan - Sök nu!</p>
          <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%", marginTop: "14px", height: 0 }}>
          <iframe
            src="https://giphy.com/embed/XD9o33QG9BoMis7iM4"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}


{resultRole &&  resultRole.toString() === "MF" &&  (
      <div >
         <a href="https://forms.gle/Zy8HaAz5Q2wdTBqP7" target="_blank" className="apply-button">
            {/*<span className="icon">🎵</span>*/} Ansök till MF {/*<span className="arrow">→</span> */}
          </a>
          <p>Du har ett öga för det estetiska och en förmåga att övertyga. Det är klart att du ska jobba som marknadsförare på Kårservice och dela med dig av din unika röst. Engagera dig i MF Kårhouse - Sök nu!</p>
          <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%", marginTop: "14px", height: 0 }}>
          <iframe
            src="https://giphy.com/embed/IwAZ6dvvvaTtdI8SD5"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}


          {secondResult && (
            <div style={{marginTop: "34px"}}>
              <h3>Du passar även som - {secondResult}</h3>
              {secondResultRole &&  (
              
              secondResultRole.toString() === "MF" ?  (
                <a href="https://forms.gle/Zy8HaAz5Q2wdTBqP7" target="_blank" className="apply-button">
                {/*<span className="icon">🎵</span>*/} Ansök till MF {/*<span className="arrow">→</span> */}
              </a>)
              : secondResultRole.toString() === "HOST" || secondResultRole.toString() === "DJ" || secondResultRole.toString() === "BAR" || secondResultRole.toString() === "CHEF"  ?   (
                       location ==="Link" ? (
                       <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLOukjmTsZQ5_bzPBRXT7EMf7pRKMGbQOPEVx16W5e-IhB8A/viewform" target="_blank" className="apply-button">
                          {/*<span className="icon">🎵</span>*/} Ansök till KK {/*<span className="arrow">→</span> */}
                        </a>
                          ):(
                        <a href="https://personal.trappan.nu/signUp.php" target="_blank" className="apply-button">
                          {/*<span className="icon">🎵</span>*/} Ansök till Trappan {/*<span className="arrow">→</span> */}
                        </a>))
              :  secondResultRole.toString() === "HG" && (
                
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEbK2CPvkKu6RRbYYYs-M-_jeeo_eysq5DGyj5Qib8XPx6Gw/viewform" target="_blank" className="apply-button">
                      {/*<span className="icon">🎵</span>*/} Ansök till HG {/*<span className="arrow">→</span> */}
                    </a>
                    )

          )}
            </div>
          )}
          
        </div>
      )}

{/*  */}

    </div>
  );
};


{ /*    
      <div className="selected-roles">
        <h3>Selected Answers:</h3>
        {answers.map((answer, index) => (
          <p key={index}>{`${answer[0]}: ${answer[1].join(", ")}`}</p>
        ))}
      </div>
*/}