import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Auth } from "./Auth/AuthReducer";
import { Intake } from "./Intake/intakeReducer";
import { Course } from "./Course/courseReducer";
import { Module } from "./Module/moduleReducer";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
      intake: Intake,
      course: Course,
      module: Module,
    }),
    compose(composeWithDevTools(applyMiddleware(...[thunk, logger])))
  );
  return store;
};
