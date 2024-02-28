import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Gamification from './pages/gamification';
import Report from './pages/report';
import Layout from "./pages/layout";
import Signature from "./pages/signature";
import Login from "./pages/login";


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/gamification" element={<Gamification />} />
        <Route path="/report" element={<Report />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
