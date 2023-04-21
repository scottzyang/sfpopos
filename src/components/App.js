import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section className="App">
      <section className='App-content'>
        <Title />
        <Outlet />
      </section>
      <Footer />
    </section>
  );
}

export default App;
