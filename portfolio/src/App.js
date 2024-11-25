import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/campbell" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
