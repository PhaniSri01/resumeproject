import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Introduction from "../Introduction";
import Career from "./Career";
import Competencies from "./Competencies";
import PersonalDetails from "./PersonalDetails";
import Academics from "./Academics";
import Professional from "./Professional";
import Experience from "./Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="appStyle">
      <Introduction />
      <hr />
      <Career />
      <hr />
      <Competencies />
      <hr />
      <Professional />
      <hr />
      <Experience />
      <hr />
      <Academics />
      <hr />
      <PersonalDetails />
    </div>
  );
}

export default App;
