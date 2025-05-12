import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import PriceHound from "./pages/PriceHound";
import Blackjack from "./pages/Blackjack";
import Minimax from "./pages/Minimax";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/projects/minimax" element={<Minimax />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/pricehound" element={<PriceHound />} />
        <Route path="/projects/blackjack" element={<Blackjack />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
