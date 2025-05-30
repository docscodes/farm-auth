import Message from "../components/Message";
import RegisterForm from "../components/RegisterForm";
import { AuthProvider } from "../contexts/AuthContext";

export const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <AuthProvider>
        <h1 className="text-2xl text-blue-800">Simple Auth App</h1>
        <Message />

        <RegisterForm />
      </AuthProvider>
    </div>
  );
};
