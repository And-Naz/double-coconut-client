import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postsReducerDuck from "./postsReducerDuck"

const rootReducer = combineReducers({
	posts: postsReducerDuck
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store