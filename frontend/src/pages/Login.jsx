import LoginForm from "../components/LoginForm";
import Message from "../components/Message";
import { AuthProvider } from "../contexts/AuthContext";

export const Login = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <AuthProvider>
        <h1 className="text-xl text-blue-800">Simple Auth App</h1>
        <Message />

        <LoginForm />
      </AuthProvider>
    </div>
  );
};
