const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/28/d770bc78-2637-4ad4-b66f-42dc7c0baea8_614903.JPG"
      />
      <h3 className="res-heading">{resName}</h3>
      <p className="res-cuisines">{cuisine}</p>
      <p className="res-deliverytime">38 mins</p>
    </div>
  );
};

export default RestaurantCard;
