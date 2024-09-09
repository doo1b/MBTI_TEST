import Form from "../components/Form";

const Login = ({ user, setUser }) => {
  return <Form mode="login" user={user} setUser={setUser} />;
};

export default Login;
