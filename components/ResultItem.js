import React from 'react'

export default function ResultItem(props) {
  return (
    <div>
        <span>price {props.price}$</span> <br/>
        <span>airportName {props.airportName}</span><br/>
        <span>originPlace {props.originPlace}</span><br/>
        <span>destinationPlace {props.destinationPlace}</span><br/>
        <span>departDate {props.departDate}</span><br/>
        <span>returnDate {props.returnDate}</span><br/>
        <span>travelClass {props.travelClass}</span><br/>
        <span onClick ={()=>props.toggleItemToFav(props.id)}>{props.isFavorite ? "remove from favs" : "add to favs"}</span><br/> <hr />
    </div>
  )
}
