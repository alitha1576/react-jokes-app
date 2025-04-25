import { useState } from 'react';

type JokeCardProps = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

export default function JokeCard({
  type,
  setup,
  punchline,
  id,
}: JokeCardProps) {
  const [showPunchline, setShowPunchline] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  const handleClick = () => {
    setShowPunchline(!showPunchline);
    setButtonStyle({ display: 'none' });
  };

  return (
    <div className="card" key={id}>
      <p className="jokeType">{type}</p>
      <h2 className="jokeSetup">{setup}</h2>
      {showPunchline && <p className="jokePunchline">{punchline}</p>}
      <button className="showButton" style={buttonStyle} onClick={handleClick}>
        Show
      </button>
      {/* <button className='saveButton'></button> */}
    </div>
  );
}
