import React, { useContext } from "react";
import descriptionMbti from "../utils/mbtiManual";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResult";
import { AuthCotext } from "../shared/AuthContext";

const ResultCard = ({ result }) => {
  const { loginUser } = useContext(AuthCotext);
  const queryClient = useQueryClient();

  const { mutate: changeVisibility } = useMutation({
    mutationFn: ({ id, visibility }) =>
      updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["result"]);
    },
  });

  const { mutate: deleteResult } = useMutation({
    mutationFn: ({ id }) => deleteTestResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["result"]);
    },
  });

  return (
    <>
      <div className="w-2/5 p-5 my-3 rounded-2xl bg-myBeige">
        <label className="flex justify-between">
          <span>{result.nickname}</span>
          <span className="text-sm">{result.date}</span>
        </label>
        <div className="pt-5 mt-3 border-t-2 border-solid border-myPink2">
          <div className="flex items-center justify-between">
            <span className="flex justify-between mb-3 text-2xl font-logy700">
              {result.result}
            </span>
            {result.userId === loginUser?.id ? (
              <div>
                <button
                  className="py-1 px-1.5 text-xs rounded-md bg-myPink2"
                  onClick={() =>
                    changeVisibility({
                      id: result.id,
                      visibility: !result.visibility,
                    })
                  }
                >
                  {result.visibility ? "비공개" : "공개"}
                </button>
                <button
                  className="ml-2 py-1 px-1.5 text-xs rounded-md bg-myPink1"
                  onClick={() =>
                    deleteResult({
                      id: result.id,
                    })
                  }
                >
                  삭제
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="leading-normal tracking-wide text-justify">
            {descriptionMbti(result.result)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
