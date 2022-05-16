import reduceClients from "./reduceClients";
import reduceLogin from "./reduceLogin";
import { combineReducers } from "redux";

export default combineReducers({
  clients: reduceClients,
  login: reduceLogin,
});