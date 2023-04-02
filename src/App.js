import logo from './logo.svg';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="App">
        <h1>Timers 4D thyme</h1>
        <NewTimer />
        <ListTimers />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
