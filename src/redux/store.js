import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'presist',
  storage
}

const persistedReducer = persistReducer(persistConfig, favoritesReducer)

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store)

export default store;
export { persistor }