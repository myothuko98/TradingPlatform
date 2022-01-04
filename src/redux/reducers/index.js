import { combineReducers } from "redux";
import { AddItemReducer } from "./items/add-item";
import { GetItemReducer } from "./items/get-item";
import { ItemDetailReducer } from "./items/item-detail";
import { LoginReducer } from "./users/login";
import { RegisterReducer } from "./users/register";

export default combineReducers({
  itemListResponse: GetItemReducer,
  loginResponse: LoginReducer,
  registerResponse: RegisterReducer,
  addItemResponse:AddItemReducer,
  itemDetailResponse:ItemDetailReducer,
});
