import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemons, handleAddPokemon } from '../actions/pokemonActions'
import { handleSortByName } from '../actions/userActions'
function PokemonPage(){
  const pokemonState = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  //acts as componentDisMount
  if (!pokemonState.loadPokemons){
    dispatch(fetchPokemons)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <button onClick={() => dispatch(handleSortByName()) }>Sort</button>
      <br />
      <PokemonCollection />
    </Container>
  )
}

export default PokemonPage
