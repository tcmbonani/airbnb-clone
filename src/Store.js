import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducers"

// Your reducers would typically be passed into combineReducers
const reducer = combineReducers({
  listListing: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer,
});

const userInfoFromLS = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
  userLogin: {userInfo: userInfoFromLS},
};

const middleware = [thunk];

// Create the store and apply middleware
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
