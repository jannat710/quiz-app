import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const { currentQuestionIndex, questions, userAnswers, quizComplete } =
    useAppSelector((state) => state.quiz);

  const dispatch = useAppDispatch();
  // Check if the current question has an answer selected
  const isAnswerSelected = userAnswers[currentQuestionIndex] !== null;

  // Handle the "Next" button click
  const handleNextQuestion = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };
  // Handle the "Previous" button click
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };
  // Handle the "Complete Quiz" button click
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  // Check if all answers are selected for the last question
  const isCompleteEnabled =
    isAnswerSelected || currentQuestionIndex !== questions.length - 1;
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button
        disabled={currentQuestionIndex === 0 || quizComplete}
        onClick={handlePreviousQuestion}
      >
        Previous
      </Button>
      {/* Next Button */}
      {currentQuestionIndex < questions.length - 1 && !quizComplete && (
        <Button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
          Next
        </Button>
      )}
      {/* Complete Quiz Button */}
      {currentQuestionIndex === questions.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
