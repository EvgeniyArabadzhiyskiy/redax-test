import axios from 'axios';
import {
  addTodosRequest,
  addTodosSuccess,
  addTodosError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  deleteTodosRequest,
  deleteTodosSuccess,
  deleteTodosError,
  toggleComletedTodosRequest,
  toggleComletedTodosSuccess,
  toggleComletedTodosError,
  // changeFilter,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => async dispatch => {
  dispatch(fetchTodosRequest());
  try {
    const res = await axios.get('/todos');
    dispatch(fetchTodosSuccess(res.data));
  } catch (error) {
    dispatch(fetchTodosError(error));
  }

  // .then(res => dispatch(fetchTodosSuccess(res.data)))
  // .catch(error => dispatch(fetchTodosError(error)));
};

const addTodo = text => async dispatch => {
  const newTodos = {
    task: text,
    completed: false,
  };

  dispatch(addTodosRequest());
  try {
    const res = await axios.post('/todos', newTodos);
    dispatch(addTodosSuccess(res.data));
  } catch (error) {
    dispatch(addTodosError(error));
  }

  // .then(res => {
  //   return dispatch(addTodosSuccess(res.data));
  // })
  // .catch(error => dispatch(addTodosError(error)));
};

const deleteTodo = todoId => dispatch => {
  console.log('todoId', todoId);

  dispatch(deleteTodosRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodosSuccess(todoId)))
    .catch(error => dispatch(deleteTodosError(error)));
};

const toggleComleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleComletedTodosRequest());

    axios
      .patch(`/todos/${id}`, update)
      .then(res => {
        console.log('axios.patch ~ res', res.data);

        return dispatch(toggleComletedTodosSuccess(res.data));
      })
      .catch(error => dispatch(toggleComletedTodosError(error)));
  };

const todosOperation = {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleComleted,
};

export default todosOperation;
