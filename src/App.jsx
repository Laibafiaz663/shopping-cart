import { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home";

export const cartcontext = createContext(); //create-context

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      {/* //provide context */}
      <cartcontext.Provider value={{ cart, setCart }}>
        <Home />
      </cartcontext.Provider>
    </>
  );
}

export default App;
