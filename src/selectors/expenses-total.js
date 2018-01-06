import React from 'react';

const getExpensesTotal = (expenses) => {
    return expenses
        .map(function (expense) { return expense.amount; })
        .reduce(function (prev, next) { return prev + next; }, 0);
};

export default getExpensesTotal;