import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'

const ExpensesSummary = (props) => (
    <div>
        <h3>
            Viewing {props.expensesCount.length} {props.expensesCount.length > 1 ? 'expenses' : 'expense'} totalling {numeral(selectExpensesTotal(props.expensesCount) / 100).format('$0,0.00')}.
        </h3>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters) 
    };
}; 

export default connect(mapStateToProps)(ExpensesSummary);