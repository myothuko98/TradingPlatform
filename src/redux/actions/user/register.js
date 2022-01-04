import axios from "axios";
import {
  backendUrl,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../../type";

export const RegisterAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${backendUrl}users`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_1 = res.data;

      if (res_1.length !== 0) {
        console.log("item", res_1);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            response: res_1,
          },
        });
      } else {
        dispatch({
          type: REGISTER,
        });
      }
    } catch (err) {
      dispatch({
        type: REGISTER_ERROR,
      });
    }
  };
};
