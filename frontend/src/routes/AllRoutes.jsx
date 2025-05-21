import { Route, Routes } from "react-router-dom";
import { CarsList, Login, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="cars" element={<CarsList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
