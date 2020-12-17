import '../App/App.css'
import Map from '../map/map.js';
import NavBar from '../NavBar/NavBar';
import Routes from '../routes/routes.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Map />
    </div>
  );
}

export default App;
