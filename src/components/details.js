import React from "react";

export default function Details(props){
    return(
    <div className="details">
        <div> 
            <h9>Floor {props.floor} </h9>
        </div>
        <div> 
            <h9>Room {props.room} </h9>
        </div>
        <div>
            <h9>Bedrooms {props.bedroom}</h9>
        </div>
    </div>
 )
}