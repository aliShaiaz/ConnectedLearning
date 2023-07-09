import NavBar from "./components/NavBar";
import "./css/App.css";
import HomePage from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <NavBar />
      <div className="container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
