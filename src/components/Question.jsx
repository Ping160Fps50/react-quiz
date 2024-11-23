import Options from "./Options";

function Question({ question, dispatch, answer }) {
  const { options, correctOption } = question;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
}

export default Question;
