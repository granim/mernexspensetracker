import React, { useContext } from 'react'
import { GlobalContext } from './../context/GlobalState';
import { numberWithCommas } from './../utils/format';

export const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const handleDelete = (id) => {
        deleteTransaction(id)
    }

    const sign = props.transaction.amount < 0 ? '-' : '+';
    return (

        <li className={props.transaction.amount < 0 ? 'minus' : 'plus'} >
            {props.transaction.text} <span>{sign}${numberWithCommas(Math.abs(props.transaction.amount))}
            </span><button onClick={() => handleDelete(props.transaction._id)}
                className="delete-btn">x</button>
        </li>

    )
}
