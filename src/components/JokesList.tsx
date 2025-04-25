import JokeCard from './JokeCard';

type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export default function JokesList({ jokes }: { jokes: Joke[] }) {
  return (
    <>
      {jokes.map((joke) => (
        <JokeCard
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
          id={joke.id}
          key={joke.id}
        />
      ))}
    </>
  );
}
