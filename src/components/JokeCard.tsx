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

  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setShowPunchline(!showPunchline);
    setButtonStyle({ display: 'none' });
  };

  const handleSaveButtonClick = () => {
    setIsSaved(prev => !prev);
  }

  const SaveButtonStyle = {
backgroundImage: isSaved ? "url('./src/assets/icons8-bookmark-48-3.png')" : "url('./src/assets/icons8-bookmark-48-2.png')"
  }

  return (
    <div className="card" key={id}>
      <button className="saveButton" style={SaveButtonStyle} onClick={handleSaveButtonClick}></button>
      <p className="jokeType">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <h2 className="jokeSetup">{setup}</h2>
      {showPunchline && <p className="jokePunchline">{punchline}</p>}
      <button className="showButton" style={buttonStyle} onClick={handleClick}>
        Show
      </button>
    </div>
  );
}
