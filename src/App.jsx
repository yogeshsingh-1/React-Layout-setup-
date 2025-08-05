import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (

      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* 404 Route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    
  );
}

export default App;
