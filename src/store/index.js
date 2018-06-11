import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { tabReducer, profileReducer, todosReducer } from "./reducers";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["profile"]
};

const profilePersistConfig = {
  key: "profile",
  storage: storage,
  blacklist: ["location"] // Intentional bug
};

const rootReducer = combineReducers({
  profile: persistReducer(profilePersistConfig, profileReducer),
  activeTab: tabReducer,
  todos: todosReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
