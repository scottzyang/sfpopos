import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt="logo for sfpopos" width="250"/> */}
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
