import Container from './components/Container/Container';
import Modal from './components/Modal/Modal';
import { ReactComponent as AddIcon } from './icons svg/add.svg';
import TodoList from './components/TodoList/TodoList/TodoList';
import Form from './components/TodoList/Form/Form';
import Filter from './components/TodoList/Filter/Filter';
import IconButton from './components/IconButton/IconButton';
import Stats from 'components/TodoList/Stats/Stats';
// import { useEffect } from 'react';
import { useState } from 'react';

// =================== Redux ==========
// import { useSelector } from 'react-redux';
// import { getTodos } from 'redux/todos/todos-selectors';

const App = () => {
  // ==== Без "redux-persist" ==== C Встроеным localStorage ===

  // const todos = useSelector(getTodos);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);
  // ======================================================

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Container>
      <div>
        <IconButton onClick={toggle} aria-label="Добавить заметку">
          {<AddIcon width="40" height="40" />}
        </IconButton>

        {isOpen && (
          <Modal onToggle={toggle}>
            <Form onAddAndSaveTodos={toggle} />
          </Modal>
        )}
      </div>

      <div>
        <Stats />
        <Filter />
        <TodoList />
      </div>
    </Container>
  );
};

export default App;



// const App = () => {

//   const [todos] = useState(
//     () => JSON.parse(localStorage.getItem('todos')) ?? []
//   );
//   const [filter, setFilter] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

  // const addTodos = () => {
  //   const addTask = {
  //     id: shortid.generate(),
  //     task: inputValue,
  //     complited: false,
  //   }; 
  // }

//   const handleSubmit = () => {
//     addTodos()
//     toggle();
//   };

  // const deleteTask = id => {
  //   setTodos(prevTodos => prevTodos.filter(todos => todos.id !== id));
  // };

//   const toggleComplitd = id => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo => {
//         return todo.id === id
//           ? { ...todo, complited: !todo.complited }
//           : todo;
//       })
//     );
//   };

//   const changeFilter = evt => {
//     setFilter(evt.currentTarget.value);
//   };

//   const getVisibleTodos = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return todos.filter(todo => {
//       return todo.task.toLowerCase().includes(normalizedFilter);
//     });
//   };

//   const toggle = () => {
//     setIsOpen(prevState => !prevState);
//   };

//   const allTodos = todos.length;
//   const ComplitedTodo = todos.reduce((acc, todo) => {
//     return todo.complited ? acc + 1 : acc;
//   }, 0);

//   const visibleTodos = getVisibleTodos();

//   return (
//     <Container>
//       <div>
//         <IconButton
//         onClick={toggle}
//         aria-label="Добавить заметку">
//           {<AddIcon width="40" height="40" />}
//         </IconButton>

//         {isOpen && (
//           <Modal onToggle={toggle}>
//             <Form onHandleSubmit={handleSubmit} />
//           </Modal>
//         )}
//       </div>

//       <div>
//       <Stats />
//         <Stats total={allTodos} completed={ComplitedTodo}/>
//         <Filter filterValue={filter} onFilterHandler={changeFilter} />

//         <TodoList
//           todos={visibleTodos}
//           onBtnClick={deleteTask}
//           onToggleComplited={toggleComplitd}
//         />
//       </div>
//     </Container>
//   );
// };

// export default App;
