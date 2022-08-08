import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

// Reducer
const counterReducer = counterSlice.reducer;

// Export Selector
export const getValue = (state: any) => state.counterReducer.value;

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export default reducer
export default counterReducer;
