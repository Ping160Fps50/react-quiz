function NextButton({ dispatch, answer, index, questionsLength }) {
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
