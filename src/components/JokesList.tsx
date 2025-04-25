import JokeCard from './JokeCard';
import { useState, useEffect } from 'react';

export default function JokesList() {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      });
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      {jokes.map((joke) => (
        <JokeCard
          key={id}
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
        />
      ))}
    </>
  );
}
