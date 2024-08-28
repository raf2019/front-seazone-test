import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Property } from "../pages/Property";
import { Welcome } from "../pages/Welcome";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/property" element={<Property />} />
    </Routes>
  );
};