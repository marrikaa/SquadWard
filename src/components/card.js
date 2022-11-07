import React from "react"
import Details from "./details";

export default function Card(props){
    return(
    <a href="https://www.myhome.ge/ka/pr/13556237/qiravdeba-axali-ashenebuli-bina--mcxeTis-qucha-4-oTaxiani"  target = "_blank" >
        <div className="card-item">
            <img className='cardphotoes' src={props.img} />
            <nav className="description">
                <h1>Rent apartment in {props.city}</h1>
                <h7>{props.neibghourhood}</h7>
                <div className="price-area">
                    <h7>{props.price}$</h7>
                    <h7>{props.area}m²</h7>
                </div>
                <div>
                    <h7>{props.phone}</h7>
                    <h7>{props.adress} </h7> 
                </div>  
                <Details 
                    floor={props.floor}
                    bedroom={props.bedroom}
                    room={props.room} /> 
            </nav>
        </div>
        </a>
    )
}