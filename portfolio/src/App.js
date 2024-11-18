import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;
