import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const handleTopRestaurantClick = () => {
    const updatedList = list?.filter((item) => item?.info?.avgRating > 4.5);
    setFilteredList(updatedList);
  };

  const handleSearch = () => {
    const updatedList = list?.filter((item) =>
      item?.info?.name?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(updatedList);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      const cards =
        jsonData?.data?.cards[1].card.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setList(cards);
      setFilteredList(cards);
    };
    console.log("useeffect rendered");

    fetchData();
  }, []);

  return (
    <div className="body-container">
      <div className="body-toolbar">
        <div className="search">
          <input
            type="text"
            className="inputBox"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <button onClick={handleTopRestaurantClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredList?.length === 0 ? (
          <ShimmerUi />
        ) : (
          filteredList?.map((item) => <RestaurantCard resDetails={item} />)
        )}
      </div>
    </div>
  );
};

export default Body;
