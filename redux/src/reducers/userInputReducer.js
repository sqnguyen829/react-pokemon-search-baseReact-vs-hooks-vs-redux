const userState = {
    searchTerm:'',
    sortByName:false
}

const userInputReducer = (state = userState, action) => {
    switch(action.type){
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm:action.searchTerm
            }
        case 'SORT_BY_NAME':
            console.log(!state.sortByName)
            return {
                ...state,
                sortByName:!state.sortByName
            }
        default:
            return state
    }
}
export default userInputReducer
