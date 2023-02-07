import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt="logo for sfpopos" width="250"/> */}
      <Title />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;
