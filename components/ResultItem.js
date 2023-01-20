import { ContextObj } from '@/Context'
import React, { useContext } from 'react'

export default function ResultItem(props) {
  const {addToFavs} = useContext(ContextObj)
  return (
    <div className='result-item-container'>
        <h1> {props.airportName}</h1><br/>
        <h4><span >From:</span> {props.originPlace}</h4>
        <h4><span >To:</span> {props.destinationPlace}</h4>
        <h4><span >Price:</span> {props.price} $</h4> 
        <h4><span className='result-item-container-primary'>Departing on:</span> {props.departDate}</h4>
        <h4><span className='result-item-container-secondary'>Returning on:</span> {props.returnDate}</h4>
        <h4><span >Class:</span> {props.travelClass}</h4>
        <h4><span >Duration:</span> ~{Math.floor(props.flightDuration/60)} hours.</h4>
        <button className= "result-item-container-btn" onClick ={() => addToFavs(props.id)}>{!props.isFavorite && "Add to Favorites"}</button> 
    </div>
  )
}
