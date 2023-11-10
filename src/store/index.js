import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { albumsReducer } from "./reducers/albumsReducer";
import { playlistsReducer } from "./reducers/playlistsReducer";
import { tracksReducer } from "./reducers/tracksReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  userReducer, albumsReducer, playlistsReducer,tracksReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
