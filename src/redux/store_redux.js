import {combineReducers, legacy_createStore,applyMiddleware, compose} from "redux";
import auth_reducer from "./auth_reducer";
import dialogs_reducer from "./dialogs_reducer";
import profiles_reducer from "./profiles_reducer";
import users_reducer from "./users_reducer";
import thunk from "redux-thunk";
import app_reducer from "./app_reducer";

let reducers = combineReducers({
	profilePage: profiles_reducer,
	dialogsPage: dialogs_reducer,
	usersPage: users_reducer,
	auth: auth_reducer,
	app: app_reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));

window.__store__ = store;	

export default store;



