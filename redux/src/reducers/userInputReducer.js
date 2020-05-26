const userState = {

}

const userInputReducer = (state = userState, action) => {
    switch(action.type){
        case 'ALL_USERS':
            return {
                ...state,
                users:action.users,
                displayUsers:action.users,
                loadUsers:true
            }
        case 'VALID_SIGN_UP':
            return {
                ...state,
                signUpValidation:action.validData,
                clearValidation:true
            }
        default:
            return state
    }
}
export default userInputReducer
