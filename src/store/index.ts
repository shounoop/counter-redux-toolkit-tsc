import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterSlice';

const store = configureStore({
	reducer: {
		counterReducer
	},
});

export default store;
