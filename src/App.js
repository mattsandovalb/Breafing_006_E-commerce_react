 
import './App.css';
import "./Bootstrap.css"
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Vistas/MainPage"
import Login from "./Vistas/Login"
import Cart from "./Vistas/Cart"

function App() {
  return (
    <div className="App">
      app
      {/* <Cart></Cart> */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
