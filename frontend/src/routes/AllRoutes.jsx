import { Route, Routes } from "react-router-dom";
import { CarsList, Login, PageNotFound, Register } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cars" element={<CarsList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
