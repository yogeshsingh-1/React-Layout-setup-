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
        {/* index का मतलब – Default ya Initial Child Route */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* 404 Route */}
        
      </Route>

      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>

      {/* Dashboard Routes (Protected in real apps) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
       {/* Fallback */}
      <Route path="*" element={<h1>404 - Page not found</h1>} />
    </Routes>
  );
}

export default App;
