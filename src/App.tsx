import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div>
      <h3 className="text-center font-bold text-4xl my-12">Quiz App</h3>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}

export default App;
