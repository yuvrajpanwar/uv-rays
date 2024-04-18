import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First React App by Yuvraj
        </p>
        <a
          className="App-link"
          href ="https://yuvrajpanwar.github.io/portfolio"
          target='_blank'
          rel="noreferrer"
        >
          Checkout my portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
