import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getTestResults } from "../api/testResult";
import ResultCard from "./ResultCard";
import { AuthContext } from "../shared/AuthContext";

const ResultList = () => {
  const { loginUser } = useContext(AuthContext);

  const { data } = useQuery({
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
