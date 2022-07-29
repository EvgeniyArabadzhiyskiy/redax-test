// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';


// const addTodo = createAction('todos/ADD_TODOS', text => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       task: text,
//       complited: false,
//     },
//   };
// });

// const addTodo = text => dispatch => {
//   const newTodos = {
//     task: text,
//     complited: false,
//   };

//   dispatch('todos/addTodosRequest')

//   axios
//     .post('/todos', newTodos)
//     .then(res =>
//       dispatch({ type: 'todos/addTodosSuccess', payload: res.data })
//       .catch(error => 
//         dispatch({
//         type:'todos/addTodosError', payload: error
//       }))
//     );
// };

export  const fetchTodosRequest = createAction('todos/fetchTodosRequest')
export  const fetchTodosSuccess = createAction('todos/fetchTodosSuccess')
export  const fetchTodosError = createAction('todos/fetchTodosError')


export  const addTodosRequest = createAction('todos/addTodosRequest')
export  const addTodosSuccess = createAction('todos/addTodosSuccess')
export  const addTodosError = createAction('todos/addTodosError')


export  const deleteTodosRequest = createAction('todos/deleteTodosRequest')
export  const deleteTodosSuccess = createAction('todos/deleteTodosSuccess')
export  const deleteTodosError = createAction('todos/deleteTodosError')


export  const toggleComletedTodosRequest = createAction('todos/toggleComletedTodosRequest')
export  const toggleComletedTodosSuccess = createAction('todos/toggleComletedTodosSuccess')
export  const toggleComletedTodosError = createAction('todos/toggleComletedTodosError')


// export  const deleteTodo = createAction('todos/DELETE_TODOS');
// export  const toggleCompletedwed = createAction('todos/TOGGLE_COMPLITED');
export  const changeFilter = createAction('todos/FILTERED_TODOS');

// const todosActions = {
  // addTodosSuccess,
  // addTodosError,
  // addTodosRequest,
  // deleteTodo,
  // changeFilter,
  // toggleCompletedwed,
// };







// export default todosActions;

// const addTodo = text => ({
//   type: types.ADD,

//   payload: {
//     id: shortid.generate(),
//     task: text,
//     complited: false,
//   },
// });

// const deleteTodo = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// const toggleCompletedwed = todoId => ({
//   type: types.TOGGLE_COMPLITED,
//   payload: todoId,
// });

// const changeFilter = value => ({
//   type: types.FILTRED_TODOS,
//   payload: value,
// });

// const toggleModal = () => ({
//   type: types.TOGGLE_MODAL,
// });
