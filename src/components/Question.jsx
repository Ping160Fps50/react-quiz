import Options from "./Options";

function Question({ question, dispatch }) {
  const { options } = question;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options options={options} />
    </div>
  );
}

export default Question;
