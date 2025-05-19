import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";

import Message from "./components/Message";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className=" bg-blue-200 flex flex-col justify-center items-center min-h-screen">
      <AuthProvider>
        <h1 className="text-2xl text-blue-800">Simple Auth App</h1>

        <Message />

        <div>
          {showLogin ? <Login /> : <Register />}
          <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Register" : "Login"}</button>
          <hr />
        </div>
        <Users />
      </AuthProvider>
    </div>
  );
};

export default App;
