export const initialState = {
    basket:[],
    user:null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
            // LOGIC FOR ADDING ITEM TO BASKET
        case 'REMOVE_FROM_BASKET':
            // REMOVE ITEM TO BASKET
            return {state}
        default:
            return state;

    }
}

export default reducer;