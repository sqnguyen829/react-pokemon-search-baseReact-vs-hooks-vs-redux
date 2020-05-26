import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import {useSelector, useDispatch } from 'react-redux'

function PokemonCollection() {
  const pokemonState = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  let pokemons = pokemonState.pokemons
  console.log(pokemons)
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map(pokemon => <PokemonCard pokemon = { pokemon } key = { pokemon.id }/>)}
    </Card.Group>
  )
}

export default PokemonCollection
