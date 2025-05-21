import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Message from "../components/Message";
import RegisterForm from "../components/RegisterForm";
import UsersList from "../components/UsersList";
import { AuthProvider } from "../contexts/AuthContext";

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className=" bg-blue-200 flex flex-col justify-center items-center min-h-screen">
      <AuthProvider>
        <h1 className="text-2xl text-blue-800">Simple Auth App</h1>

        <Message />

        <div>
          {showLogin ? <LoginForm /> : <RegisterForm />}
          <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Register" : "Login"}</button>
          <hr />
        </div>
        <UsersList />
      </AuthProvider>
    </div>
  );
};

