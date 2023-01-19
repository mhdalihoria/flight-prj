import { useState, useContext } from "react";
import { ContextObj } from "@/Context";
import { flightList } from "@/mockDB";
import ResultItem from "./ResultItem";

export default function Results() {
  const { search } = useContext(ContextObj);
  const [priceFilter, setPriceFilter] = useState(null)
  const [durationFilter, setDurationFilter] = useState(null)
  let filteredItems = [];

  function convertFormat(unconvertedItem) {
    const stringifiedItemArr = unconvertedItem.toString().split(" ");
    const convertedItem = [
      stringifiedItemArr[2],
      stringifiedItemArr[1],
      stringifiedItemArr[3],
    ]
      .join("-")
      .toString();
    return convertedItem;
  }

  if (search !== undefined) {
    filteredItems = flightList.filter(
      (item) =>
        item.originPlace === search.from &&
        item.destinationPlace === search.to &&
        item.departDate === convertFormat(search.departDate) &&
        item.returnDate === convertFormat(search.returnDate)
    );
  }

  // import favItems from context, and run two for loops, to compare the items of favItems with those of filtered items, and change the status of isFavorite if they're matching

  console.log(durationFilter, priceFilter)

  const filteredElements = filteredItems.map((item, index) => {
    return <ResultItem key={index} {...item} />;
  });

  return (
    <div className="results-container">
      <div className="results-filter">
        <select onChange={(e)=> setDurationFilter(e.target.value)}>
          <option value={null}>--duration--</option>
          <option value={"shortest"}>shortest</option>
          <option value={"longest"}>longest</option>
        </select>
        <select onChange={(e)=> setPriceFilter(e.target.value)}>
          <option value={null}>--price--</option>
          <option value={"cheapest"}>Cheapest</option>
          <option value={"expensive"}>Most expensive</option>
        </select>
      </div>
      {search !== undefined && filteredElements}
    </div>
  );
}
