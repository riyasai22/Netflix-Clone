import React from "react";
import CardSlider from "./CardSlider";

export default React.memo(function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    //to slide the top n movies in range(from->to)
    return movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="Epic Series" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Spicy Dramas" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Block Busters" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Picks for You" data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
