import { Outlet } from "react-router-dom";
import Footer from '../client/components/footer';
import Home from '../client/screens/home';
export const App = () => {
  return (
    <div className="App">
      {/* Outros componentes ou conteúdo da página */}
      <Home />
      <Footer />
    </div>
  );
};
export default App