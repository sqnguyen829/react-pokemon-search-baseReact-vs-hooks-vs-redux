import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const pokemonsURL='http://localhost:3000/pokemon/'

class PokemonPage extends React.Component {

  state = {
    pokemons:[],
    searchText:'',
    sortByName:false
  }

  componentDidMount(){
    fetch(pokemonsURL)
    .then(res => res.json())
    .then(pokeData => {
      this.setState({
        pokemons:pokeData
      })
    })
  }

  handleSearch = (search) => {
    this.setState({
      searchText:search
    })
  }

  addPokemon = (newPokemon) => {
    fetch(pokemonsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:newPokemon.name,
        stats:[
          {
            value:newPokemon.hp,
            name:"hp"
          }
        ],
        sprites:{
          front:newPokemon.frontUrl,
          back:newPokemon.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemons:[...this.state.pokemons, pokemon]
      })
    })
  }

  handleSortName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  render() {
    let pokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
    if(this.state.sortByName){
      pokemons.sort((a,b) => a.name.localeCompare(b.name))
    }
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={ this.addPokemon }/>
        <br />
        <Search handleSearch = { this.handleSearch }/>
        <br/>
        <button onClick={() => this.handleSortName()  }>Sort</button>
        <br />
        <PokemonCollection pokemons = { pokemons }/>
      </Container>
    )
  }
}

export default PokemonPage
