import "./css/App.css"
import Favourite from "./Pages/Favourites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App