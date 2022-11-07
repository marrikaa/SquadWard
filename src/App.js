
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Cards />
    </div>
  );
}

export default App;
