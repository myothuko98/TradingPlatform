import { ADD_ITEM_ERROR, ADD_ITEM, ADD_ITEM_SUCCESS } from "../../type";

const initialState = {
  loading: false,
  message: "",
  debugMessage: "",
  response: "",
  success: false,
};

export const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
        success: true,
        message: "success",
      };
    case ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        message: "fail",
      };
    default:
      return state;
  }
};
