import { useState, useContext, useEffect } from "react";
import { ContextObj } from "@/Context";
import { flightList } from "@/mockDB";
import ResultItem from "./ResultItem";

export default function Results() {
  const { search } = useContext(ContextObj);
  const [priceFilter, setPriceFilter] = useState(null);
  const [durationFilter, setDurationFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState();
  // let filteredItems = [];

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

  useEffect(() => {
    if (search !== undefined) {
      setFilteredItems(
        flightList.filter(
          (item) =>
            item.originPlace === search.from &&
            item.destinationPlace === search.to &&
            item.departDate === convertFormat(search.departDate) &&
            item.returnDate === convertFormat(search.returnDate)
        )
      );
    }
  }, [search]);

  useEffect(() => {
    if (priceFilter === null && durationFilter === null) {
      return;
    }
    if (priceFilter !== null && durationFilter === null) {
      setFilteredItems(() => {
        return filteredItems?.sort((p1, p2) => {
          const start = priceFilter === "cheapest" ? -1 : 1;
          const end = priceFilter === "cheapest" ? 1 : -1;
          return p1.price < p2.price ? start : p1.price > p2.price ? end : 0;
        });
      });
      setPriceFilter(null);
    }
    if (priceFilter === null && durationFilter !== null) {
      setFilteredItems(() => {
        return filteredItems?.sort((p1, p2) => {
          const start = durationFilter === "shortest" ? -1 : 1;
          const end = durationFilter === "shortest" ? 1 : -1;
          return p1.flightDuration < p2.flightDuration
            ? start
            : p1.flightDuration > p2.flightDuration
            ? end
            : 0;
        });
      });
      setDurationFilter(null);
    }
  }, [priceFilter, durationFilter, filteredItems]);

  console.log(priceFilter);

  const filteredElements = filteredItems?.map((item, index) => {
    return <ResultItem key={index} {...item} />;
  });

  return (
    <>
      {search !== undefined && (
        <div>
          <div className="results-filter">
            <select onChange={(e) => setDurationFilter(e.target.value)}>
              <option value={null} hidden selected>--duration--</option>
              <option value={"shortest"}>shortest</option>
              <option value={"longest"}>longest</option>
            </select>
            <select onChange={(e) => setPriceFilter(e.target.value)}>
              <option value={null} hidden selected>--price--</option>
              <option value={"cheapest"}>Cheapest</option>
              <option value={"expensive"}>Most expensive</option>
            </select>
        </div>
            <div className="results-container">
          {filteredElements}
          </div>
        </div>
      )}
    </>
  );
}
