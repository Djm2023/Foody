import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants");

    const jsonData = await data.json();

    console.log(jsonData);

    setListOfRestaurant(jsonData?.data);
    setFilteredRestaurant(jsonData?.data);

    console.log(jsonData?.data, "aaaaaaaaaaaaaa");
  };

  if (listOfRestaurant?.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const searchedData = listOfRestaurant?.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    if (searchedData?.length > 0) setFilteredRestaurant(searchedData);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          onChange={handleChange}
          value={searchText}
          className="search-input"
          type="text"
          placeholder=" Search restaurant"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant?._id} to={"/restaurant/" + restaurant?._id}>
            <RestaurantCard key={restaurant?._id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
