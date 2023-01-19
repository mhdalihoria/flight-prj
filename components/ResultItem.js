import { ContextObj } from '@/Context'
import React, { useContext } from 'react'

export default function ResultItem(props) {
  const {addToFavs} = useContext(ContextObj)
  return (
    <div>
        <span>price {props.price}$</span> <br/>
        <span>airportName {props.airportName}</span><br/>
        <span>originPlace {props.originPlace}</span><br/>
        <span>destinationPlace {props.destinationPlace}</span><br/>
        <span>departDate {props.departDate}</span><br/>
        <span>returnDate {props.returnDate}</span><br/>
        <span>travelClass {props.travelClass}</span><br/>
        <span onClick ={() => addToFavs(props.id)}>{props.isFavorite ? "remove from favs" : "add to favs"}</span><br/> <hr />
    </div>
  )
}
