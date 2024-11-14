import { Outlet } from "react-router-dom";
import Footer from '../client/components/footer';
import Home from '../client/screens/home';
// import Login from '../client/screens/login';
export const App = () => {
  return (
    <div className="App">
      <Home />
      <Footer />
      {/* <Login /> */}
    </div>
  );
};
export default App