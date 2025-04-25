import { useState } from 'react';

export default function JokeCard({ type, setup, punchline }) {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div className="card">
      <p className="jokeType">{type}</p>
      <h2 className="jokeSetup">{setup}</h2>
      {showPunchline && <p className="jokePunchline">{punchline}</p>}
      <button onClick={() => setShowPunchline(!showPunchline)}>
        {showPunchline ? 'Hide' : 'Show'}
      </button>
      <button>Save</button>
    </div>
  );
}
