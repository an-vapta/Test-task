// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import ReduxThunk from 'redux-thunk';
import movieReducer from './reducer';
import { createStore,combineReducers, applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movieReducer
});


export const store = createStore(rootReducer,
   composeEnhancer( applyMiddleware(thunk))
);