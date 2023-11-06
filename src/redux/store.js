//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import rootReducer from "./root-reducer";

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})
 


export default store;   
