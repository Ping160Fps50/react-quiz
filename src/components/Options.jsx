import { useQuiz } from "../hooks/useQuiz";

function Options() {
  const { question, dispatch, answer } = useQuiz();
  const { options, correctOption } = question;
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            answer === index
              ? answer !== correctOption
                ? "wrong--answered"
                : ""
              : ""
          } ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
