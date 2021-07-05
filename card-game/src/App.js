import CharacterCard from './CharacterCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <CharacterCard value="h" />
        <CharacterCard value="i" />
      </div>

      <p>
        Hello {"World"}
      </p>
    </div>
  );
}

export default App;
