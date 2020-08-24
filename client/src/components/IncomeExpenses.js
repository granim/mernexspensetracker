import React, { useContext } from 'react'
import { GlobalContext } from './../context/GlobalState';
import { numberWithCommas } from './../utils/format';


export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);
    const totals = transactions.map(item => item.amount);

    // Calculate All expenses
    const expense = totals.filter(a => a < 0);
    const totalExpense = expense.reduce((a, b) => a + b, 0);

    // Calculate all income
    const income = totals.filter(a => a > 0);
    const totalIncome = income.reduce((a, b) => a + b, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${numberWithCommas(totalIncome)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(numberWithCommas(totalExpense))}</p>
            </div>
        </div>
    )
}
