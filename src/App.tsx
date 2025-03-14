import { Route, Routes } from "react-router-dom";
import MyFace from "./components/me";
import Bar from "./components/TopBar";
import Projects from "./components/projects";
import HomeRedirect from "./components/HomeRedirector";
import Contact from "./components/ContactInfo";
import "./App.css";

function App() {
  return (
    <>
      <div className="mx-auto" style={{ width: 220 }}>
        <Bar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/omnie" element={<MyFace />} />
          <Route path="/projekty" element={<Projects />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
