import logo from './me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href ="https://yuvrajpanwar.github.io/portfolio"
          target='_blank'
          rel="noreferrer"
        >
        <img src={logo} className="App-logo" alt="logo" /></a>
        <a
          className="App-link"
          href ="https://yuvrajpanwar.github.io/portfolio"
          target='_blank'
          rel="noreferrer"
        >
          --Checkout my portfolio--
        </a>
      </header>
    </div>
  );
}

export default App;
