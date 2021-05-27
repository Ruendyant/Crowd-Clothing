import { combineReducers } from "redux";
import CartReducer from "./cart/cart-reducer";
import UserReducer from './user/user-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory/directory_comp";
import CollectionReducer from "./collection/collection-reducer";

const persistconfig = {
  key : 'root',
  storage, 
  whitelist : ['cart']
}

const rootReducer = combineReducers({
  user : UserReducer,
  cart : CartReducer,
  directory : directoryReducer,
  collection : CollectionReducer
})

export default persistReducer(persistconfig,rootReducer);