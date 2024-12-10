import { useQuiz } from "../hooks/useQuiz";

function StartScreen() {
  const { questionsLength, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome To The React Queiz!</h2>
      <h3>{questionsLength} Questions To Test Your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQueiz" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
