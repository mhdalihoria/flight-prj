import { useContext } from "react";
import { ContextObj } from "@/Context";
import { flightList } from "@/mockDB";
import ResultItem from "./ResultItem";

export default function Results() {
  const { search } = useContext(ContextObj);
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

  console.log(filteredItems)

  return (
    <div>
      {search !== undefined &&
        filteredItems.map((item, index) => {
          return <ResultItem key={index} {...item} />;
        })}
    </div>
  );
}
