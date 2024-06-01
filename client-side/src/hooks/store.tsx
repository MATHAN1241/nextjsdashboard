// store.ts
// import {  combineReducers, createStore } from 'redux';
// import userReducer from './reducers/userreducers';


// const rootReducer = combineReducers({
//     user: userReducer
// });

// const store = createStore(rootReducer);

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});