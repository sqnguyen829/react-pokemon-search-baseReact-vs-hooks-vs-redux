const pokemonState = {
    pokemons:[],
    loadPokemons:false
}

const pokemonReducer = (state = pokemonState, action) => {
    switch(action.type){
        case 'SET_POKEMONS':
            console.log(action.pokemons)
            return {
                ...state,
                pokemons: action.pokemons,
                loadPokemons:true
            }
        case 'ADD_POKEMON':
            return {
                state
            }
        default:
            return state
    }
}
export default pokemonReducer
