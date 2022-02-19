import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeroSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchItems,
  getTrending,
} from "../../redux/actions.js/giff_actions";
import Loading from "../Loading/Loading";
import ImageCard from "../ImageCard/ImageCard";
import Button from "../Button/Button";

const HeroSection = () => {
  //! states
  const dispatch = useDispatch();
  const [offset, setOffSet] = useState(0);
  const [inputData, setInputData] = useState();
  const [searchItemOffset, setSearchItemOffSet] = useState(21);
  const height_ref = useRef();
  const [loading, setLoading] = useState(false);

  //! selector
  const data_from_state = useSelector((state) => state.trending);
  const searched_data_from_state = useSelector((state) => state.searchItem);

  //! useEffects
  //TODO :- Mounting
  useEffect(() => {
    dispatch(getTrending());
  }, []);

  //TODO :- Updating
  useEffect(() => {
    setLoading(false);
  }, [searched_data_from_state]);

  //! Function calls
  //Todo :- checking if the passed value is empty
  const isEmpty = (val) => {
    if (Array.isArray(val) && val.length === 0) {
      // console.log("inside isEmpty");
      var value = true;
    }
    return value;
  };

  //Todo :- checking if the passed value is undefined
  const isUndefined = (val) => {
    if (val === undefined) {
      // console.log("inside undefined");
      var value = true;
    }
    return value;
  };

  //Todo :- default load more
  const handleClick = () => {
    setOffSet((prev) => prev + 21);
    let offSetLocal = offset + 21;
    dispatch(getTrending(offSetLocal));
  };

  //Todo :- Searched load more
  const handleSearchClick = () => {
    setSearchItemOffSet((prev) => prev + 21);
    let local_offset = searchItemOffset + 21;
    dispatch(getSearchItems(inputData, local_offset));
  };

  // Todo :- getting input data from child component (Navbar)
  const handleInputData = (data) => {
    setInputData(data);
  };

  //Todo :- scroll functionality
  const onScroll = () => {
    if (height_ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = height_ref.current;
      if (clientHeight + scrollTop + 2 > scrollHeight) {
        // if (inputData !== undefined) {
        //   setSearchItemOffSet((prev) => prev + 21);
        //   let local_offset = searchItemOffset + 21;
        //   dispatch(getSearchItems(inputData, local_offset));
        // } else {
        //   setOffSet((prev) => prev + 21);
        //   let offSetLocal = offset + 21;
        //   dispatch(getTrending(offSetLocal));
        // }
      }
    }
  };

  //Todo :- Loading info
  const handleLoadingInfo = (val) => {
    setLoading(val);
  };

  return (
    <div>
      <div className="Hero_container" onScroll={onScroll} ref={height_ref}>
        <SearchBar
          getInputData={(data) => handleInputData(data)}
          getLoading={(val) => handleLoadingInfo(val)}
        />
        {(isUndefined(data_from_state) || isEmpty(data_from_state)) && (
          <Loading />
        )}
        {loading && <Loading />}
        <div className="HeroSection_images_wrapper">
          {isEmpty(searched_data_from_state) ? (
            <div
              className="HeroSection_images_card_wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {!isEmpty(data_from_state) &&
                !isUndefined(data_from_state) &&
                data_from_state.map((item) => {
                  return <ImageCard key={item.id} item={item} />;
                })}
            </div>
          ) : (
            <div className="HeroSection_images_wrapper">
              {searched_data_from_state.map((item) => {
                return <ImageCard key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>
        <div className="heroSection_loadMore-button_wrapper">
          {isEmpty(searched_data_from_state) ? (
            <Button handleClick={handleClick} />
          ) : (
            <Button handleClick={handleSearchClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
