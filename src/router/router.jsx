import { Route, Routes } from "react-router-dom";
import Main from "../components/main";
import NotFound from "../components/notFound/pagenot";
import Category from "../components/category/category";

export default function Routerss() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
