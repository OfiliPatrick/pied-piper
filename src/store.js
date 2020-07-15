// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";


// const composeEnhancers = composeWithDevTools({
//   trace: true,
//   traceLimit: 25,
// }); 

// const initialState = {};

// const store = createStore(
//   rootReducer,
  
//   // initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;


import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //enable in dev
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
