import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Page/Home";
import { Details } from "./Page/Detials";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:userId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
