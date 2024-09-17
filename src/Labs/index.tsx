import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

// Name: Chengxu Lan
export default function Labs() {
    return (
      <div>
        <h1>Labs</h1>
        <h1> Chengxu Lan</h1>
        <a href="https://github.com/ChelsyLan/kanbas-react-web-app">github repository</a>
        <TOC />
        <a href="https://github.com/ChelsyLan/kanbas-react-web-app" id="wd-github"></a>
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />
        </Routes>
      </div>
    );
  }
  
