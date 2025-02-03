import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz, TQuiz, TQuizData } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

const AllQuiz = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllQuizQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleSetQuiz = (questions: TQuizData[]) => {
    dispatch(setQuiz(questions));
  };
  return (
    <div>
      <div className="grid grid-cols-8 gap-4 ">
        {data?.map(
          (quiz: TQuiz, index: string) => (
            console.log(quiz.questions),
            (
              <Card
                onClick={() => handleSetQuiz(quiz.questions)}
                key={index}
                className="p-4 hover:shadow-lg cursor-pointer"
              >
                <h3>{quiz.name}</h3>
                <p>{quiz.description}</p>
              </Card>
            )
          )
        )}
      </div>
    </div>
  );
};

export default AllQuiz;
