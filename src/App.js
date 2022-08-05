import "./App.css";
import Logo from "./Components/Logo/Logo";
import ListingDetail from "./Components/ListingDetail/ListingDetail";

function App() {
  return (
    <div className="App">
      <div className="wireframe">
        <h1>PULL UP APP</h1>

        <nav>
          Nav Bar Here
          <Logo />
        </nav>
        <ListingDetail />
      </div>
    </div>
  );
}

export default App;
