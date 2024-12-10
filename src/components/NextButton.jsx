import { useQuiz } from "../hooks/useQuiz";

function NextButton() {
  const { dispatch, answer, index, questionsLength } = useQuiz();
  const hasAnswered = answer !== null;
  const isFinished = index + 1 === questionsLength;
  return (
    hasAnswered && (
      <button
        className="btn btn-ui"
        onClick={() =>
          isFinished
            ? dispatch({ type: "finished" })
            : dispatch({ type: "nextQuestion" })
        }
      >
        {isFinished ? "Finish" : "Next"}
      </button>
    )
  );
}
export default NextButton;
