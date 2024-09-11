import React, { useContext, useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResult";
import { AuthCotext } from "../shared/AuthContext";

const TestForm = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const { loginUser } = useContext(AuthCotext);

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const dateString = year + "-" + month + "-" + day;
    const resultData = {
      userId: loginUser.id,
      nickname: loginUser.nickname,
      result,
      answers,
      date: dateString,
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <>
      <form
        className="flex flex-col w-2/5"
        onSubmit={(e) => {
          e.preventDefault();
          handleTestSubmit(answers);
        }}
      >
        {questions.map((q, index) => (
          <div key={q.id} className="my-5 text-center">
            <p className="px-3 py-8 my-2 bg-myPink3 rounded-2xl">
              {q.question}
            </p>
            {q.options.map((option, i) => (
              <label
                key={i}
                className="flex items-center justify-center py-5 my-2 cursor-pointer bg-myBeige rounded-xl"
              >
                <span className="relative w-5 h-5 mr-3">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    className="w-5 h-5 transition-all border-2 rounded-full appearance-none cursor-pointer peer border-myPink2 checked:border-myPink1"
                  />
                  <span className="absolute w-3 h-3 transition-opacity transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 left-1/2 top-1/2 bg-myPink1 peer-checked:opacity-100"></span>
                </span>
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">제출하기</button>
      </form>
    </>
  );
};

export default TestForm;
