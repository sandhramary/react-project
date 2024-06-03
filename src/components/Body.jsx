import { useState } from "react";
import { restautantList } from "../common/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [list, setList] = useState(restautantList);
  const [search, setSearch] = useState("");
  const handleTopRestaurantClick = () => {
    const updatedList = list.filter((item) => item.data.avgRating > 4);
    setList(updatedList);
  };
  return (
    <div className="body-container">
      <div className="body-toolbar">
        <input
          type="text"
          className="inputBox"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleTopRestaurantClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {list.map((item) => (
          <RestaurantCard resDetails={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
