import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import weatherReducer from "./weatherReducer";
import thunk from 'redux-thunk';




let reducers = combineReducers({
  weatherPage: weatherReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
