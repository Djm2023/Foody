import React, { useEffect } from "react";

const RestaurantMenu = () => {
  //   const [] = useState([]);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4744988&lng=78.3622895&restaurantId=456004&catalog_qa=undefined&submitAction=ENTER",
    );

    const jsonData = await data?.data?.json();

    console.log(jsonData);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="menu">
      <h2>Name of the Restaurant</h2>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Coffee</li>
        <li>Chicken</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
