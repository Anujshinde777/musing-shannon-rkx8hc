import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [control, setControl] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    if (!control) clearInterval(t);
    return () => clearInterval(t);
  }, [control]);
  const startFun = () => {
    setControl(true);
  };
  const stopFun = () => {
    setControl(false);
  };
  return (
    <div className="App">
      <h1>{timer}</h1>
      <button onClick={startFun}>Start </button>
      <button onClick={stopFun}>Stop </button>
    </div>
  );
}
