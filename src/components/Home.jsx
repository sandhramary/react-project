import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { RESTUARANTS_LIST_API_URL } from "../common/constants";

const Home = () => {
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
      const data = await fetch(RESTUARANTS_LIST_API_URL);
      const jsonData = await data.json();
      const cards =
        jsonData?.data?.cards[1].card.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setList(cards);
      setFilteredList(cards);
    };

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
          filteredList?.map((item) => (
            <Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>
              <RestaurantCard resDetails={item} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
