import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenses_total from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/visibleExpenses';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const formattedExpenseTotal = numeral(expenseTotal).format('$0,0.00');
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseCount ===1 ? 'expense' : 'expenses'} toatalling {formattedExpenseTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expenses_total(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);