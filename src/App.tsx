import "./App.css";
import { Competences } from "./body/Competences";
import { Formation } from "./body/Formation";
import { Presentation } from "./body/Presentation";
import Projects from "./body/Projects";

function App() {
  return (
    <div id="app">
      <Presentation />
      <Competences />
      <Formation />
      <Projects />
    </div>
  );
}

export default App;
