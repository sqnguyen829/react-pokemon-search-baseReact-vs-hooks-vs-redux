import React, { useState, useEffect } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const pokemonsURL='http://localhost:3000/pokemon/'

function PokemonPage() {

  //could also seperate the state of hooks as well
  // let [pokemons, setPokeState] = useState([])
  // let [searchText, setSearch] = useState('')
  // let [sortByName, setSort] = useState(false)

  let [pokeState, setPokeState] = useState({pokemons:[], searchText:'', sortByName:false})

  useEffect(() => {
    fetch(pokemonsURL)
    .then(res => res.json())
    .then(pokemonsArr => {
        setPokeState({...pokeState, pokemons:pokemonsArr})
    })
  },[])

  let addPokemon = (pokemon) => {
    fetch(pokemonsURL, {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:pokemon.name,
        stats:[
          {
            value:pokemon.hp,
            name:"hp"
          }
        ],
        sprites:{
          front:pokemon.frontUrl,
          back:pokemon.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(newPokemon => {
      setPokeState({...pokeState, pokemons:[...pokeState.pokemons, newPokemon]})
    })
  }

  let pokemonsArr = pokeState.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokeState.searchText.toLowerCase()))
  if(pokeState.sortByName){
    pokemonsArr.sort((a,b) => a.name.localeCompare(b.name))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon = { addPokemon } />
      <br />
      <Search setPokeState = { setPokeState } pokeState={ pokeState }/>
      <br />
      <button onClick={() => setPokeState({...pokeState, sortByName:!pokeState.sortByName})  }>Sort</button>
      <br />
      <PokemonCollection pokemons ={ pokemonsArr }/>
    </Container>
  )
}

export default PokemonPage
