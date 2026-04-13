const RestaurantCard = ({ resData }) => {
  const { name, image, cuisines, rating, deliveryTime } = resData;

  return (
    <div className="res-card">
      <img className="res-img" alt="res-img" src={image} />
      <div className="res-content">
        <h3 className="res-heading">{name}</h3>
        <p className="res-cuisines">{cuisines?.join(", ")}</p>
        <div className="res-deliverytime">
          <div>{deliveryTime} minutes</div>
          <div>{rating} Stars</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
