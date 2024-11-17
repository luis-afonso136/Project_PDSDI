import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../client/components/footer';
import Home from '../client/screens/home';
import Login from '../client/screens/login';
import Register from '../client/screens/register';
import CursosPage from '../client/screens/cursosPage';
import SettingsPage from '../client/screens/settingsPage';
import AdminPanel from '../client/screens/adminPanel';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cursosPage" element={<CursosPage />} />
          <Route path="/settingsPage" element={<SettingsPage />} />
          <Route path="/adminPanel" element={<AdminPanel/>} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
