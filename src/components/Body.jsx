import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../components/Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4744988&lng=78.3622895&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const jsonData = await data.json();
    const { restaurants } =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

    console.log(restaurants);

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);

    console.log(restaurants, "aaaaaaaaaaaaaa");
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const searchedData = listOfRestaurant?.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
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
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
