import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSlist';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo for sfpopos" width="250"/>
      <Title />
      <POPOSList />
    </div>
  );
}

export default App;
