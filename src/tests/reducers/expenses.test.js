import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '5'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        description: 'sneakers',
        amount: 35000,
        createdAt: moment(),
        note: 'This was last months rent'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount: 6000
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], {
        id: '3',
        description: 'Credit Card',
        note: '', 
        amount: 6000,
        createdAt: moment(0).add(4, 'days').valueOf()
    }]);
});

test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 6000
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
