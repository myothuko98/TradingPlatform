import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from "../../type";

const initialState = {
  loading: false,
  message: "",
  debugMessage: "",
  response: "",
  success: false,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
        success: true,
        message: "success",
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        message: "fail",
      };
    default:
      return state;
  }
};
