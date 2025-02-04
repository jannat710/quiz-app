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
      <div className="grid lg:grid-cols-4 gap-4 pb-8 ">
        {data?.map(
          (quiz: TQuiz, index: string) => (
            console.log(quiz.questions),
            (
              <div
                onClick={() => handleSetQuiz(quiz.questions)}
                key={index}
                className="rounded-xl service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]"
              >
                <p className="font-bold text-2xl group-hover:text-white text-black/80">
                  {quiz.title}
                </p>
                <p className="text-gray-400 text-sm">{quiz.description}</p>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default AllQuiz;
