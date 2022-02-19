import * as reducers from "./gif_reducers.js";

const InitialState = {
  trending: [],
  searchItem: [],
};

it("first test", () => {
  expect(reducers.reducers(undefined, {})).toEqual(InitialState);
});

it("second test", () => {
  expect(
    reducers.reducers(
      { ...InitialState, searchItem: [{ 1: "item one" }, { 2: "item two" }] },
      {
        type: "GET_TRENDING",
        payload: [
          { id: 1, data: { message: "This is data 1" } },
          { id: 2, data: { message: "This is data 2" } },
        ],
      }
    )
  ).toEqual({
    trending: [
      { id: 1, data: { message: "This is data 1" } },
      { id: 2, data: { message: "This is data 2" } },
    ],
    searchItem: [{ 1: "item one" }, { 2: "item two" }],
  });
});
