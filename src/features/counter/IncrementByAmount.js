import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';

const IncrementByAmount = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1); 
    return (
        <div>
            <div>
                <span>{count}</span>

                <br></br>

                <input value={amount}  onChange={ (e) => setAmount(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value))}/>

                <br></br>
                
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(amount))}
                >
                    Increment By Amount
                </button>
                
            </div>
        </div>
    )
}

export default IncrementByAmount;