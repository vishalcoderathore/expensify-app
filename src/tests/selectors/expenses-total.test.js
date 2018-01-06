import selectExpenses from '../../selectors/expenses-total';
import { expenses } from '../fixtures/dummyExpenses';

test('should return 0 if no expenses', () => {
    const getTotalExpenses = selectExpenses([]);
    expect(getTotalExpenses).toEqual(0);
});

test('should correctly add up single expenses', () => {
    const getTotalExpenses = selectExpenses([expenses[0]]);
    expect(getTotalExpenses).toEqual(500);
});

test('should correctly add up multiple expenses', () => {
    const getTotalExpenses = selectExpenses(expenses);
    expect(getTotalExpenses).toEqual(650);
});