import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Gamification from './pages/gamification';
import Report from './pages/report';
import Layout from "./pages/layout";
import Signature from "./pages/signature";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Menu from "./components/menu";
import PassagemBastao from "./pages/passagemBastao";
import AssinaturaModal from "./pages/Assinatura/assinaturaModal";
import AssinaturasGrid from "./pages/Assinatura/assinaturasGrid";
import GamificationGrid from "./pages/gamificationGrid";
import PreviaLayout from "./pages/previaLayoutScreen";
import RelatorioGrid from "./pages/Relatorio/relatorioGrid";
import RelatorioCreate from "./pages/Relatorio/relatorioCreate";


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Verifica se a rota atual é "/login"
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app-container">
      {!isLoginPage && <Navbar />}
      
      <div className="main-container">
        {!isLoginPage && <Menu />}
        
        <div className="content">
          <Routes>
            <Route path="/gamification" element={<GamificationGrid />} />
            <Route path="/report" element={<Report />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/signature" element={<Signature />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passagemBastao" element={<PassagemBastao />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/assinaturaModal" element={<AssinaturaModal/>}/>
            <Route path="/assinaturasGrid" element={<AssinaturasGrid />}/>
            <Route path="/gamification/regragame" element={<Gamification />}/>
            <Route path="/gamification" element={<Gamification/>}/>
            <Route path="/telaPreviaLayout" element={<PreviaLayout/>}/>
            <Route path="/relatorio" element={<RelatorioGrid/>}/>
            <Route path="/relatorioCreate" element={<RelatorioCreate/>}/>
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;