import React, { useContext } from 'react'
import { GlobalContext } from './../context/GlobalState';
import { numberWithCommas } from './../utils/format';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const totals = transactions.map(item => item.amount);
    const balance = totals.reduce((a, b) => a + b, 0);


    return (
        <div>
            <h4>Your Balance</h4>
            <h1 >${numberWithCommas(balance)}</h1>
        </div>
    )
}
