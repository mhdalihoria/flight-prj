import React from 'react'

export default function FavElement(props) {
  return (
    <div>
        <span>price {props.price}$</span> <br/>
        <span>airportName {props.airportName}</span><br/>
        <span>originPlace {props.originPlace}</span><br/>
    </div>
  )
}
