
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'], 
};

export default persistConfig;
