import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

const Question = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  // Handle answer selection
  const handleAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };
  return (
    <div className="flex justify-center">
      <Card className="w-[450px] ">
        <CardHeader className="">
          <CardTitle>
            <h3>{currentQuestion.question}</h3>
          </CardTitle>
          <CardDescription>
            <p>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                className="w-full mt-3"
                key={index}
                size={"lg"}
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControl />
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;
