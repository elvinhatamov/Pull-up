import "./App.css";
import Logo from "./Components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <div className="wireframe">
        <h1>PULL UP APP</h1>
        <h2>The message from Lud</h2>
        <nav>
          Nav Bar
          <Logo />
        </nav>
      </div>
    </div>
  );
}

export default App;
