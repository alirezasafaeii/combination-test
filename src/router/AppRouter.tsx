import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
