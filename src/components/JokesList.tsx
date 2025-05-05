import JokeCard from './JokeCard';

type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

type JokeList = {
  jokes: Joke[];
  onSavedChange: () => void;
};

export default function JokesList({ jokes, onSavedChange }: JokeList) {
  return (
    <>
      {jokes.map((joke) => (
        <JokeCard
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
          id={joke.id}
          key={joke.id}
          onSavedChange={onSavedChange}
        />
      ))}
    </>
  );
}
