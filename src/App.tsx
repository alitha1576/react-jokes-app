import './App.css';
import Header from './components/Header';
import JokesList from './components/JokesList';
import RefreshButton from './components/RefreshButton';

function App() {
  return (
    <div className="container">
      <Header />
      <JokesList />
      <RefreshButton />
    </div>
  );
}

export default App;
