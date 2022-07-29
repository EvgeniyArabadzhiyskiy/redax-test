export const getFilter = state => state.todos.filter;
export const getTodos = state => state.todos.todos;

export const getVisibleTodos = state => {
  const filter = getFilter(state);
  const todos = getTodos(state);

  const normalizedFilter = filter.toLowerCase();

  return todos.filter(todo =>
    todo.task.toLowerCase().includes(normalizedFilter)
  );
};

export const getCompletedTodos = state => {
  const todos = getTodos(state);

  return todos.reduce((acc, todo) => {
    return todo.complited ? acc + 1 : acc;
  }, 0);
};
