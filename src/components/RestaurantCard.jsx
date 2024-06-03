import { CDN_URL } from "../common/constants";

const RestaurantCard = (props) => {
  const { resDetails } = props;
  const { name, cuisines, costForTwoString, cloudinaryImageId, avgRating } = resDetails?.data;

  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="img"
        />
      </div>
      <h3>{name}</h3>
      <h4>{costForTwoString}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
