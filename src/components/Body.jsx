import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

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

    console.log(restaurants, "aaaaaaaaaaaaaa");
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
