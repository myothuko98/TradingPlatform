import axios from "axios";
import { backendUrl, ITEM_LIST_ERROR, ITEM_LIST_SUCCESS } from "../../type";

export const GetItemAction = (cat, searchData) => {
  let catUrl = "",
    searchUrl = "";
  if (cat) {
    catUrl = `&category=${cat}`;
  }
  if (searchData) {
    searchUrl = `&q=${searchData}`;
  }
  return async (dispatch) => {
    try {
      const res = await axios.get(`${backendUrl}items?${catUrl}${searchUrl}`);
      const res_1 = res.data;

      if (res_1.length !== 0) {
        console.log("item", res_1);
        dispatch({
          type: ITEM_LIST_SUCCESS,
          payload: {
            response: res_1,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: ITEM_LIST_ERROR,
      });
    }
  };
};
