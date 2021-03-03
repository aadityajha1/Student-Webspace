import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Auth } from "./Auth/AuthReducer";
import { Intake } from "./Intake/intakeReducer";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
      intake: Intake,
    }),
    compose(composeWithDevTools(applyMiddleware(...[thunk, logger])))
  );
  return store;
};
