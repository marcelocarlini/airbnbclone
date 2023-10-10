
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms.js"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/:id' element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;