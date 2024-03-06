import { Route, Routes } from "react-router-dom";
import Main from "../components/main";

export default function Routerss() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}
