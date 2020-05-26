const pokemons = 'http://localhost:3000/pokemon/'

export const handleSetPokemonsAsnc = (pokemons) => {
    return { type: 'SET_POKEMONS', pokemons }
}

export const fetchPokemons = dispatch => {
    fetch(pokemons)
    .then(res => res.json())
    .then(pokemonData => {
        dispatch(handleSetPokemonsAsnc(pokemonData))
    })
}

