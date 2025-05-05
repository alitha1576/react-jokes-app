import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import JokesList from './components/JokesList';
import RefreshButton from './components/RefreshButton';

function App() {
  const [jokes, setJokes] = useState([]);
  const [activeTab, setActiveTab] = useState<'new' | 'library'>('new');
  const [savedJokes, setSavedJokes] = useState([]);

  const loadSavedJokes = () => {
    const saved = localStorage.getItem('savedJokes');
    if (saved) {
      setSavedJokes(JSON.parse(saved));
    } else {
      setSavedJokes([]);
    }
  };

  useEffect(() => {
    loadSavedJokes();
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((response) => response.json())
      .then((data) => setJokes(data));
  };

  return (
    <div className="container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <JokesList
        jokes={activeTab === 'new' ? jokes : savedJokes}
        onSavedChange={loadSavedJokes}
      />
      {activeTab === 'new' && <RefreshButton onRefresh={fetchJokes} />}
    </div>
  );
}

export default App;
