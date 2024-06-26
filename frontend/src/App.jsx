import React from "react";
import { Routes , Route } from "react-router-dom";
import  Home  from "./pages/Home.jsx";
import  Createbook  from "./pages/Createbook.jsx";
import  Editbook  from "./pages/Editbook.jsx";
import  Showbook  from "./pages/Showbook.jsx";
import  Deletebook  from "./pages/Deletebook.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<Createbook/>} />
      <Route path="/books/details/:id" element={<Showbook/>} />
      <Route path="/books/edit/:id" element={<Editbook/>} />
      <Route path="/books/delete/:id" element={<Deletebook/>} />
    </Routes>

  )
}
export default App;