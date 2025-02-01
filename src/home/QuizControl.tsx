import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  // Handle the "Next" button click
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button>Previous</Button>
      <Button onClick={handleNextQuestion}>Next</Button>
    </div>
  );
};

export default QuizControl;
