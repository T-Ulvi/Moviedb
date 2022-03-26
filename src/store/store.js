import { createStore, combineReducers } from "redux";
import wishlist from "./reducers/wishlistReducer";
import watchlist from "./reducers/watchlistReducer";

const reducers = combineReducers({
  wishlist,
  watchlist,
});

function configureStore() {
  return createStore(reducers);
}

export default configureStore;
