import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants/" + resId);

    const jsonData = await data.json();

    // ✅ IMPORTANT FIX
    setResInfo(jsonData.data[0]);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (!resInfo) return <h2>Loading...</h2>;

  return (
    <div className="menu">
      {/* 🔥 Restaurant Info */}
      <h2>{resInfo.name}</h2>
      {/* <img src={resInfo.image} alt={resInfo.name} width="250" /> */}
      <p>{resInfo.cuisines.join(", ")}</p>
      <p>{resInfo.rating} ⭐</p>
      <p>{resInfo.deliveryTime}</p>

      {/* 🔥 Menu */}
      <h2>Menu</h2>

      {resInfo.categories.map((category) => (
        <div key={category._id}>
          <h3>{category.name}</h3>

          {category.items.map((item) => (
            <div key={item._id} style={{ marginBottom: "20px" }}>
              {/* <img src={item.image} alt={item.name} width="150" /> */}
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>{item.description}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
