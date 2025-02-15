import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

interface Pokemon {
  id: number;
  name: string;
  type: string[];
}

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
  },
  {
    id: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
  },
];

app.get("/pokemons", (_request, response) => {
  response.json(pokemons);
});

app.get("/pokemons/:id", (request, response) => {
  const pokemon = pokemons.find(
    (p: Pokemon) => p.id === parseInt(request.params.id)
  );
  pokemon
    ? response.json(pokemon)
    : response.status(404).json({ error: "Pokemon not found!" });
});

app.listen(1337, () => console.log("Pokedex API is running on port 1337"));
