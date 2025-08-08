import React from 'react'
import { useParams } from 'react-router' // This allows us to acces url parameters

const PokemonDetails = (props) => {
    const { pokemonId } = useParams() // allows us to access url parameters as an object { pokemonId}
    console.log(props)
    console.log("URL Parameter", pokemonId)

    const singlePokemon = props.pokemon.find(poke => {
        return poke._id == pokemonId
    })
  return (
    <>
    <h2>{singlePokemon.name}</h2>
    <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
    </dl>
    </>
  )
}

export default PokemonDetails