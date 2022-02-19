import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchItems } from "../../redux/actions.js/giff_actions";
import "./SearchBar.css";
import debounce from "lodash.debounce";

const SearchBar = ({ getInputData, getLoading }) => {
  //! use States
  // const [input, setInput] = useState("");
  // const [keyPress, setKeyPress] = useState(true);

  //! function calls
  const dispatch = useDispatch();

  //TODO to handle input and search only when there is certain pause
  // const handleInput = (e) => {
  //   console.log("event fired");
  //   setKeyPress(true);
  // setTimeout(() => {
  //   setKeyPress(false);
  // }, 1000);
  //   setInput(e.target.value);
  //   getInputData(e.target.value);
  // };

  //TODO useEffect (componentDidMount)
  // useEffect(() => {
  //   console.log("useEffect ran and dispatched");
  //   dispatch(getSearchItems(input));
  // }, [keyPress]);

  //TODO :- Debounce callback function.
  const handleChange = (e) => {
    getLoading(true);
    getInputData(e.target.value);
    dispatch(getSearchItems(e.target.value));
  };

  //TODO :- Debounce function
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  });

  return (
    <div>
      <div className="SearchBar_container">
        <input
          type="text"
          // value={input}
          // onChange={(e) => handleInput(e)}
          onChange={debouncedResults}
          placeholder="Search giffy"
        />
      </div>
    </div>
  );
};

export default SearchBar;
