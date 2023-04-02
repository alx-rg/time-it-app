import logo from './logo.svg';
import './App.css';
import NewTimer from './components/NewTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer List</h1>
        <p>
          Enter your timer's <code>name</code> and click save to start it.
        </p>
        <NewTimer />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
