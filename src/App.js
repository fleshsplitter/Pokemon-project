import './App.css';
import Pokemon from './components/Pokemon';
import Button from './components/Button';
import getPokemon from './functions/getPokemon';

function App() {
  getPokemon();

  return (
    <div className="App">
      <Pokemon></Pokemon>
      <button className="btn" onClick={getPokemon}>
        catch the pokemon!
      </button>
    </div>
  );
}

export default App;
