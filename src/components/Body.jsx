import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Food"
          cuisine="Ice-cream , Biryani , North Indian"
        />
        <RestaurantCard resName="KFC" cuisine="Chicken , noodles" />
      </div>
    </div>
  );
};

export default Body;
