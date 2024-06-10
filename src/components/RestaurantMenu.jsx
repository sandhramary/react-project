import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { RESTUARANT_DETAILS_API_URL } from "../common/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(RESTUARANT_DETAILS_API_URL + resId);
      const jsonData = await data.json();
      setResData(jsonData?.data);
    };
    fetchData();
  }, []);

  if(!resData) return <Shimmer />

  const { name, avgRating, cuisines, costForTwoMessage, totalRatingsString } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>
        Rating:{avgRating} -- {totalRatingsString}
      </h4>
      <p>{costForTwoMessage}</p>
      <h2>Menu:-</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{(item?.card?.info?.defaultPrice || item?.card?.info?.price)/100}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
