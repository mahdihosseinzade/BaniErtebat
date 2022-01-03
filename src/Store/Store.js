import { combineReducers, createStore,compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import SensorReducers from "./Sensors/SensorReducers";
import ActorReducers from './Actors/ActorReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    Sensors:SensorReducers ,
    Actors:ActorReducers
});

const Store =createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default Store;