const pokemonState = {
    pokemons:[],
    loadPokemons:false
}

const pokemonReducer = (state = pokemonState, action) => {
    switch(action.type){
        case 'SET_POKEMONS':
            return {
                ...state,
                pokemons: action.pokemons,
                loadPokemons:true
            }
        case 'ADD_POKEMON':
            return {
                ...state,
                pokemons: [...state.pokemons, action.pokemon]
            }
        default:
            return state
    }
}
export default pokemonReducer
