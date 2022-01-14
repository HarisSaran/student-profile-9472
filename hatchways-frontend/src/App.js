import logo from "./logo.svg";
import "./App.css";
import Student from "./components/Student";

// const name = "Haris";
// const x = true;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="container">
    //   <h1>Hello From Haris</h1>
    //   <h2>Hi hi {name} </h2>
    //   <h2>Hi hi {x ? 'Yes' : 'nope'} </h2>
    // </div>
    <div className="container">
      <Student />
    </div>
  );
}

export default App;
