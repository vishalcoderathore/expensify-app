import moment from 'moment';

export const expenses = [
    {
        id: '1',
        description: 'Rent',
        amount: 500,
        note: '',
        createdAt: 0
    },
    {
        id: '2',
        description: 'Groceries',
        amount: 100,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },    
    {
        id: '3',
        description: 'Entertainment',
        amount: 50,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export const filters = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

