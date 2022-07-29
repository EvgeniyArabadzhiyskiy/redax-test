import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import todoReducer from './todos/todos-reducer';

// const persistConfig = {
//   key: 'hello',
//   storage,
//   blacklist: ['filter'],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    todos:  todoReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);





// ============ Без "redux-persist" ==============

// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './todoReducer';

// const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
