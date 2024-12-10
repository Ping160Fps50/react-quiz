import { useQuiz } from "../hooks/useQuiz";

function FinishScreen() {
  const { points, totalPoint, highScore, dispatch } = useQuiz();
  const percentagePoint = Math.ceil((points / totalPoint) * 100);
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {totalPoint} (
        {percentagePoint} %)
      </p>
      <p className="highscore">(Highescore: {highScore} score)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
