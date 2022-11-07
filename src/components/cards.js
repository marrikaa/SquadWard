import React from "react";
import Card from "./card";

         

export default function Cards(){

    
const[dataArray, setDataArray]=React.useState([])
    
React.useEffect(()=>{
    fetch("http://192.168.178.101:8080/api/v1/search?city=Tbilisi").
    then(res=>res.json()).
    then((data=> setDataArray(data)))},[])

    const Cards=dataArray.map(item =>
       <Card 
            img={item.headImageUrl}
            city={item.city}
            area={item.area}
            price={item.price}
            floor={item.stairNumber}
            bedroom={item.roomCount-1}
            room={item.roomCount} /> );
    return(
    <div className='cards'>
        {Cards}
    </div>
    )
}