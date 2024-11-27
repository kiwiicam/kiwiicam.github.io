import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
