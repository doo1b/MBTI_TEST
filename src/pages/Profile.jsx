import { useContext } from "react";
import Form from "../components/Form";
import { AuthContext } from "../shared/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResult";
import ResultCard from "../components/ResultCard";

const Profile = () => {
  const { loginUser } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["resuit"],
    queryFn: getTestResults,
  });

  const userResult = data?.filter((result) => result.userId === loginUser?.id);
  return (
    <>
      <Form mode="profile"></Form>
      {userResult?.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </>
  );
};

export default Profile;
