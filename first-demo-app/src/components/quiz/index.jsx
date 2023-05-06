import { useState } from "react";

const quizFile = [
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    choices: ["stringify()", "parse()", "convert()", "None of the above"],
    type: "MCQs",
    correctAnswer: "stringify()",
    checked: "",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "var and let", "None of the above"],
    type: "MCQs",
    correctAnswer: "var and let",
    checked: "",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    choices: [
      "console.log()",
      "cons.log()",
      "window.alert",
      "All of the above",
    ],
    type: "MCQs",
    correctAnswer: "All of the above",
    checked: "",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    choices: ["const", "var", "let", "constant"],
    type: "MCQs",
    correctAnswer: "const",
    checked: "",
  },
];

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState(quizFile);
  const [index, setIndex] = useState(0);
  const getResult = () => {
    console.log("quizQuestions", quizQuestions);
    console.log(
      quizQuestions.filter(
        (question) => question.correctAnswer === question.checked
      ).length
    );
  };
  const handleChange = (value, index) => {
    const temp = [...quizQuestions];
    temp[index] = {
      ...temp[index],
      checked: value,
    };
    setQuizQuestions(temp);
  };
  return (
    <div>
      <div>
        <p>
          Q.{index + 1}- {quizQuestions[index].question}
        </p>
        <div>
          {quizQuestions[index].choices.map((choice, choiceIndex) => (
            <div key={choiceIndex}>
              <input
                type={"radio"}
                name={quizQuestions[index].question}
                checked={choice === quizQuestions[index].checked}
                value={choice}
                onChange={(e) => handleChange(e.target.value, index)}
              />
              <label>{choice}</label>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setIndex((pre) => pre + 1)}
        disabled={index === quizQuestions.length - 1}
      >
        Next
      </button>
      <button onClick={() => setIndex((pre) => pre - 1)} disabled={index === 0}>
        Pre
      </button>
      <button onClick={getResult}>Submit</button>
    </div>
  );
};

export default Quiz;
