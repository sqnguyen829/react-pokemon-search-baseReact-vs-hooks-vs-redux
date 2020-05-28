import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

function PokemonCollection() {
  const pokemonState = useSelector(state => state.pokemons)
  const userState = useSelector(state => state.userInputs)
  let pokemons = pokemonState.pokemons.filter( pokemon => pokemon.name.toLowerCase().includes(userState.searchTerm.toLowerCase()))
  if(userState.sortByName){
    pokemons.sort((a,b) => a.name.localeCompare(b.name))
  }
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map(pokemon => <PokemonCard pokemon = { pokemon } key = { pokemon.id }/>)}
    </Card.Group>
  )
}

export default PokemonCollection
