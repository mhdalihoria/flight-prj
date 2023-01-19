import React from 'react'

export default function FavElement(props) {
  return (
    <div className='fav-element-container'>
        <h1> {props.airportName}</h1><br/>
        <h4><span >From:</span> {props.originPlace}</h4>
        <h4><span >To:</span> {props.destinationPlace}</h4>
        <h4><span >Price:</span> {props.price} $</h4> 
        <h4><span className='result-item-container-primary'>Departing on:</span> {props.departDate}</h4>
        <h4><span className='result-item-container-secondary'>Returning on:</span> {props.returnDate}</h4>
        <h4><span >Class:</span> {props.travelClass}</h4>
    </div>
  )
}
