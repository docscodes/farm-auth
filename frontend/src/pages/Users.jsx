import Message from "../components/Message";
import UsersList from "../components/UsersList";
import { AuthProvider } from "../contexts/AuthContext";

export const Users = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <AuthProvider>
        <Message />
        <UsersList />
      </AuthProvider>
    </div>
  );
};
