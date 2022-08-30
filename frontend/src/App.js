import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

import VisibleHeaderMobile from "./components/header/mobile/VisibleHeaderMobile";
import HeaderDesktop from "./components/header/desktop/HeaderDesktop";

function App() {
  return (
    <>
      <Router>
        <HeaderDesktop />
        <VisibleHeaderMobile />
        <Routes>
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
