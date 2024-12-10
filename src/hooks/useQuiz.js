import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("You Use Context Out Of QuizProvider");
  }
  return context;
}

export { useQuiz };
