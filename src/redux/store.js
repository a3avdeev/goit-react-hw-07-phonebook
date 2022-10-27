import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter', '_persist'],
};

const reducers = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  reducers
);

export const store = configureStore({
  reducer: contactsPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
