import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { useGetPokemonByNameQuery } from "./services/pokemon";
function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <div>
      <Counter />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.name} />
        </>
      ) : null}
    </div>
  );
}

export default App;
