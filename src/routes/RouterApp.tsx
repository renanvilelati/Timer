import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { History } from "../components/History";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/history" element={<History />}></Route>
    </Routes>
  )
}