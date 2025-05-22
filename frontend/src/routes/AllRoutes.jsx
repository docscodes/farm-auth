import { Route, Routes } from "react-router-dom";
import { CarsList, Login, PageNotFound, Register, Users } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />} />
        <Route path="cars" element={<CarsList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
