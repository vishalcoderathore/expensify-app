import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import expenses_total from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/visibleExpenses';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const formattedExpenseTotal = numeral(expenseTotal).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseCount === 1 ? 'expense' : 'expenses'} totalling <span>{formattedExpenseTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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