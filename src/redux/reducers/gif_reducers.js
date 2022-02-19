const InitialState = {
  trending: [],
  searchItem: [],
};

export const reducers = (
  // InitialState = {
  //   trending: [],
  //   searchItem: [],
  // },
  state = InitialState,
  action
) => {
  switch (action.type) {
    case "GET_TRENDING":
      return {
        searchItem: state.searchItem,
        trending: [...state.trending, ...action.payload],
      };

    case "GET_SEARCH_RESULT":
      return {
        trending: state.trending,
        searchItem: [...state.searchItem, ...action.payload],
      };
    case "GET_NEW_SEARCH_RESULT":
      return {
        trending: state.trending,
        searchItem: [...state.searchItem, ...action.payload],
      };
    default:
      return state;
  }
};
