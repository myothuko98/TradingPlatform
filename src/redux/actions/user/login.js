import axios from "axios";
import {
  backendUrl,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from "../../type";

export const LoginAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${backendUrl}users?name=${data.name}&password=${data.password}`
      );
      const res_1 = res.data;

      if (res_1.length !== 0) {
        console.log("item", res_1);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            response: res_1,
          },
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
        });
      }
    } catch (err) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};
