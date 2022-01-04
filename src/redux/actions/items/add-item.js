import axios from "axios";
import {
  ADD_ITEM_ERROR,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  backendUrl,
  REGISTER,
  REGISTER_ERROR,
} from "../../type";

export const AddItemAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${backendUrl}items`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_1 = res.data;
      console.log("item", res);
      if (res.status === 201) {
        console.log("item", res_1);
        dispatch({
          type: ADD_ITEM_SUCCESS,
          payload: {
            response: res_1,
          },
        });
      } else {
        dispatch({
          type: ADD_ITEM,
        });
      }
    } catch (err) {
      dispatch({
        type: ADD_ITEM_ERROR,
      });
    }
  };
};
