import CharacterCard from './CharacterCard';
import './App.css';
const word = "hello"

function App() {
  return (
    <div className="card">
      {
        Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
      }
    </div>
  );
}

export default App;
