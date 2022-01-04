import axios from "axios";
import { backendUrl, ITEM_DETAIL_ERROR, ITEM_DETAIL_SUCCESS } from "../../type";

export const ItemDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${backendUrl}items?id=${id}`);
      const res_1 = res.data;

      if (res_1.length !== 0) {
        console.log("item", res_1);
        dispatch({
          type: ITEM_DETAIL_SUCCESS,
          payload: {
            response: res_1,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: ITEM_DETAIL_ERROR,
      });
    }
  };
};
