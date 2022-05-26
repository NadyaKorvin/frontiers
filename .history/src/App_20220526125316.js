import { useState } from "react";
import "./App.css";
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation";
import FirstScreen from "./components/firstScreen/FirstScreen";
import LastScreen from "./components/lastScreen/LastScreen"

function App() {
  const [mousePosition, setMousePosition] = useState("");

  const listenUpperMousePosition = (event) => {
    console.log(event);
    console.log(event.target);
    setMousePosition(event.target);
  };

  return (
    <>
      <FirstScreen />
      <div className="App">
        <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} />
      </div>
      <LastScreen />
    </>
  );
}
export default App;
