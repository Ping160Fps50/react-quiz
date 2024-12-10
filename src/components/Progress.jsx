import { useQuiz } from "../hooks/useQuiz";

function Progress() {
  const { index, points, answer, questionsLength, totalPoint } = useQuiz();

  return (
    <header className="progress">
      <progress max={questionsLength} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionsLength}
      </p>
      <p>
        Points <strong>{points}</strong> / {totalPoint}
      </p>
    </header>
  );
}

export default Progress;
