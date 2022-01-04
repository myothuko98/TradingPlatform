import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from "../../type";

const initialState = {
  loading: false,
  message: "",
  debugMessage: "",
  response: "",
  success: false,
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
        success: true,
        message: "success",
      };
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        message: "fail",
      };
    default:
      return state;
  }
};
