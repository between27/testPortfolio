import "./App.css";
import { Competences } from "./body/Competences";
import { Formation } from "./body/Formation";
import { Presentation } from "./body/Presentation";

function App() {
  return (
    <div id="app">
      <Presentation />
      <Competences />
      <Formation />
    </div>
  );
}

export default App;
