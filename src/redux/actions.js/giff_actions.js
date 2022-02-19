import axios from "axios";

export const getTrending =
  (offset = 5) =>
  async (dispatch) => {
    var url = "";
    if (offset === 5) {
      url = `http://api.giphy.com/v1/gifs/trending?api_key=e0wjGJb86AZXHNwcxglstdu3GVMob4bU&limit=20`;
    } else {
      url = `http://api.giphy.com/v1/gifs/trending?api_key=e0wjGJb86AZXHNwcxglstdu3GVMob4bU&limit=20&offset=${offset}`;
    }
    try {
      const res = await axios.get(url);
      const { data } = res;
      dispatch({ type: "GET_TRENDING", payload: data.data });
    } catch (error) {
      console.log("error in search default actions", error);
    }
  };

export const getSearchItems =
  (value, offset = 5) =>
  async (dispatch) => {
    var url = `http://api.giphy.com/v1/gifs/search?api_key=e0wjGJb86AZXHNwcxglstdu3GVMob4bU&q=${value}&limit=20&offset=${offset}`;
    try {
      const data = await axios.get(url);
      dispatch({ type: "GET_SEARCH_RESULT", payload: data.data.data });
    } catch (error) {
      console.log("error found in search actions  :- ", error);
    }
  };
