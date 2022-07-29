import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {  
  addTodosSuccess,
  addTodosError,
  addTodosRequest,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  deleteTodosRequest,
  deleteTodosSuccess,
  deleteTodosError,
  toggleComletedTodosRequest,
  toggleComletedTodosSuccess,
  toggleComletedTodosError,
  changeFilter,
  // toggleCompletedwed,
} from './todos-actions';

// ==== Без "redux-persist" ==== C Встроеным localStorage ===
// const initialState = JSON.parse(localStorage.getItem('todos')) ?? [];

const changeTodoReducer = createReducer([], {
  [fetchTodosSuccess]: (_state, { payload}) => payload,
  [addTodosSuccess]: (state, { payload }) => [payload, ...state],



  [deleteTodosSuccess]: (state, { payload }) => state.filter(todo => todo.id !== payload),



  [toggleComletedTodosSuccess]: (state, { payload }) =>
    state.map(todo => {
      return todo.id === payload.id
        ? payload
        : todo;
    }),
});


const loadingReducer = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,
  [addTodosRequest]: () => true,
  [addTodosSuccess]: () => false,
  [addTodosError]: () => false,
  [deleteTodosRequest]: () => true,
  [deleteTodosSuccess]: () => false,
  [deleteTodosError]: () => false,
  [toggleComletedTodosRequest]: () => true,
  [toggleComletedTodosSuccess]: () => false,
  [toggleComletedTodosError]: () => false,
  

})

const filterTodosReducer = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});


const todoReducer = combineReducers({
  todos: changeTodoReducer,
  filter: filterTodosReducer,
  loading: loadingReducer,
});

export default  todoReducer







// const changeTodoReducer = (state = [],  { type, payload }) => {
  
//   switch (type) {
//     case 'todo/ADD':
//       return [payload, ...state];

//     case 'todo/DELETE':
//       return state.filter(todo => todo.id !== payload);

//     case 'todo/TOGGLE_COMPLITED':
//       return state.map(todo => {
//         return todo.id === payload
//           ? { ...todo, complited: !todo.complited }
//           : todo;
//       });

//     default:
//       return state;
//   }
// };

// const filterTodosReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'filter/FILTRED_TODOS':
//       return payload;

//     default:
//       return state;
//   }
// };


// const toggleModalReducer = (state = false, action) => {

//   switch (action.type) {
//     case 'TOGGLE_MODAL':
//       return !action.payload;

//     default:
//       return state;
//   }
// };
