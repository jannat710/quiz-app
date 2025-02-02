import AllQuiz from "./home/AllQuiz";
import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center font-bold text-4xl my-12">Quiz App</h3>
      <AllQuiz></AllQuiz>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}

export default App;
