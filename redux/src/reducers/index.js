import {combineReducers} from 'redux'

//combining all the reducer into allReducers
const rootReducers = combineReducers({
    pokemons: pokemonsReducer,
    userInputs: userInputsReducer
})
export default rootReducers