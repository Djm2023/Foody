const RestaurantCard = ({ resData }) => {
  const { name, avgRatingString, cloudinaryImageId, cuisines, sla } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <div className="res-content">
        <h3 className="res-heading">{name}</h3>
        <p className="res-cuisines">{cuisines?.join(", ")}</p>
        <div className="res-deliverytime">
          <div>{sla.deliveryTime} minutes</div>
          <div>{avgRatingString} Stars</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
