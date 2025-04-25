import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import JokesList from './components/JokesList';
import RefreshButton from './components/RefreshButton';

function App() {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((response) => response.json())
      .then((data) => setJokes(data));
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="container">
      <Header />
      <JokesList jokes={jokes} />
      <RefreshButton onRefresh={fetchJokes} />
    </div>
  );
}

export default App;
