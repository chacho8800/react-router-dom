
import { useState } from 'react';
import PokemonList from './components/PokemonList/PokemonList.jsx';
import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes } from 'react-router';
import PokemonDetails from './components/PokemonDetails/PokemonDetails.jsx';
import PokemonForm from './components/PokemonForm/PokemonForm.jsx';

const initialState = [
  { _id: 1, name: 'Bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'Ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'Venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'Charmander', weight: 85, height: 6 },
  { _id: 5, name: 'Charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1
    setPokemon([...pokemon, newPokemonData])
  }

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/pokemon' element={<PokemonList pokemon={pokemon} />} />
        <Route path='/pokemon/new' element={< PokemonForm addPokemon={addPokemon} />} />
        <Route path='/pokemon/:pokemonId' element={<PokemonDetails pokemon={pokemon}/>} />
        <Route path='*' element={<h2>THe URL tour tried does not exist</h2>} />
      </Routes>
    </>
  );
};

export default App;
