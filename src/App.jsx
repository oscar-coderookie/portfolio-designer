import "./App.scss";
import { Header, Footer, Sidebar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function Links() {
  return (
    <Routes>
      <Route exact path="/contact" element={<HomePage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <Links />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
