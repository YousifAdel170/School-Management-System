import { applyMiddleware, createStore } from "redux";
import { schoolReducer } from "../reducer/schoolReducer";
import { thunk } from "redux-thunk";

export const schoolStore = createStore(schoolReducer, applyMiddleware(thunk));
