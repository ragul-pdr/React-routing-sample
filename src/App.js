import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./Components/Home";
import Plans from "./Components/Plans";
import ActivePlans from "./Components/ActivePlans";

function App() {
  return (
    <div className="mainPage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/active-plans" element={<ActivePlans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
