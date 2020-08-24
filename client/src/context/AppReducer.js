export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(t => t._id !==
                    action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}