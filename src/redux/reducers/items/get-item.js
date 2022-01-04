import { ITEM_LIST, ITEM_LIST_ERROR, ITEM_LIST_SUCCESS } from "../../type";

const initialState = {
  loading: false,
  message: "",
  debugMessage: "",
  response: "",
  success: false,
};

export const GetItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
        success: true,
        message: "success",
      };
    case ITEM_LIST:
      return {
        ...state,
        loading: true,
      };
    case ITEM_LIST_ERROR:
      return {
        ...state,
        loading: false,
        message: "fail",
      };
    default:
      return state;
  }
};
