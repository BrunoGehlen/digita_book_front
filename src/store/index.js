import { createStore, combineReducers, applyMiddleware } from "redux";
import ThemeReducer from "./modules/theme/reducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({ theme: ThemeReducer })

const store = createStore(reducers, applyMiddleware(thunk))

export default store