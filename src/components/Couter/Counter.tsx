import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	getValue,
	increment,
	decrement,
	incrementByAmount,
} from '../../store/reducer/counterSlice';

const Counter: React.FC = () => {
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmout] = useState('2');

	const initialValue = useSelector(getValue);

	const incrementHandle = () => {
		dispatch(increment());
	};

	const decrementHandle = () => {
		dispatch(decrement());
	};

	const incrementAmountHandle = () => {
		dispatch(incrementByAmount(Number(incrementAmount)));
	};

  const changeAmoutHandle = (e: any) => {
    const number = Number(e.target.value) || 0
    setIncrementAmout(number.toString())
  }

	return (
		<React.Fragment>
			<div>
				<button onClick={decrementHandle}>-</button>
				<span>{initialValue}</span>
				<button onClick={incrementHandle}>+</button>
			</div>
			<div>
				<input value={incrementAmount} onChange={changeAmoutHandle} />
				<button onClick={incrementAmountHandle}>ADD Amout</button>
			</div>
		</React.Fragment>
	);
};

export default Counter;
