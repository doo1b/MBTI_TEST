import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getTestResults } from "../api/testResult";
import ResultCard from "./ResultCard";
import { AuthCotext } from "../shared/AuthContext";

const ResultList = () => {
  const { loginUser } = useContext(AuthCotext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["resuit"],
    queryFn: getTestResults,
  });

  const filterResult = data?.filter(
    (result) => result.visibility || result.userId === loginUser?.id
  );

  return (
    <>
      {filterResult?.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </>
  );
};

export default ResultList;
