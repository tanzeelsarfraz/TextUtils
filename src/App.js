import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const title = "Text Utils";
  const showAlert = (messageType, message) => {
    setAlert({
      MessageType: messageType,
      Message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const handleMode = () => {
    if (mode.toLowerCase() === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("primary", "Dark Mode Enabled");
      document.title = "Text Utils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text Utils";
    }
  };
  return (
    <>
    <Router>
      <Navbar title={title} mode={mode} handleMode={handleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path = "TextUtils/about" element={<About title={title} mode={mode} />}>
          </Route>
          <Route path="TextUtils" element = {<TextForm mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
        
        
      </div>
      </Router>
    </>
  );
}

export default App;
