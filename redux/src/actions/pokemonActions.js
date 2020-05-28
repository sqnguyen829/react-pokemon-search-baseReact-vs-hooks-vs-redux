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

export const handleAddPokemonAsns = (pokemon) => {
    return { type: 'ADD_POKEMON', pokemon }
}


export const handleAddPokemon = (e, newPokemon, setForm) => {
    e.preventDefault()
    setForm({name:'',hp:'', frontUrl:'', backUrl:''})
    return dispatch => {
        fetch(pokemons, {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name: newPokemon.name,
                stats:[
                {
                    value: newPokemon.hp,
                    name:"hp"
                }
                ],
                sprites:{
                front: newPokemon.frontUrl,
                back: newPokemon.backUrl
                }
            })
        })
        .then(res => res.json())
        .then(pokemon => {
            dispatch(handleAddPokemonAsns(pokemon))
        })
    }
}