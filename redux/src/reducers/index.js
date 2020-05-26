import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import userInputReducer from './userInputReducer'

//combining all the reducer into allReducers
const rootReducers = combineReducers({
    pokemons: pokemonReducer,
    userInputs: userInputReducer
})
export default rootReducers