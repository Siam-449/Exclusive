import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";
const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
