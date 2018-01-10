//Expense Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense] //Array Spread Operator
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.expense.id !== id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, ...action.updates  //Object Spread Operator
                    };
                } else {
                    return expense;
                }
            })
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};

export default expenseReducer;