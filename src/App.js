import "./App.css";
import Logo from "./Components/Logo/Logo";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="wireframe">
        <Navbar />
        <ListingDetail />
      </div>
    </div>
  );
}

export default App;
