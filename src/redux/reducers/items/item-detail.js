import { ITEM_DETAIL, ITEM_DETAIL_ERROR, ITEM_DETAIL_SUCCESS, ITEM_LIST, ITEM_LIST_ERROR, ITEM_LIST_SUCCESS } from "../../type";

const initialState = {
  loading: false,
  message: "",
  debugMessage: "",
  response: "",
  success: false,
};

export const ItemDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
        success: true,
        message: "success",
      };
    case ITEM_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case ITEM_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        message: "fail",
      };
    default:
      return state;
  }
};
