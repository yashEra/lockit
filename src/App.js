import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} /> */}

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
