import { Button } from "@/components/ui/button";
import {
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  // Handle the "Next" button click
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  // Handle the "Previous" button click
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button onClick={handlePreviousQuestion}>Previous</Button>
      <Button onClick={handleNextQuestion}>Next</Button>
    </div>
  );
};

export default QuizControl;
