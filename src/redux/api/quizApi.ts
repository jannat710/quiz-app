import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => `/quizzes`,
    }),
    addQuizApi: builder.mutation({
      query: (body) => (
        console.log(body),
        {
          url: `/quizzes`,
          method: "POST",
          body,
        }
      ),
    }),
  }),
});

export const { useGetAllQuizQuery, useAddQuizApiMutation } = quizApi;
