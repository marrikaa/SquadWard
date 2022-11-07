import React from "react";



export default function Searchbar(){
    const [required,setRequared]=React.useState({
        city:"",
        minPrice:"",
        maxPrice:"",
        minArea:"",
        maxArea:"",
    })

    function handleChange(event){
        const{name,value}=event.target;
        setRequared(prev => ( {
                ...prev,
                [name]:value,}))
    }


    return(
    <form className="searchBar">
        <div className="form">
                <h2>City</h2>
                <input id="text"
                        type="text"
                        name="city"
                        class="text"
                        value={required.city} 
                        onChange={handleChange} />
        </div>
        <div className="form">
                <h2>Price-min</h2>
                <input  id="Min-price"
                        type="number"
                        min="0"
                        name="minPrice"
                        value={required.minPrice} 
                        onChange={handleChange} />
        </div> 
        <div className="form">
                <h2>Price-max</h2>
                <input id="max-price"
                        type="number"
                        min="0"
                        name="maxPrice"
                        value={required.maxPrice} 
                        onChange={handleChange} /> 
        </div>
        <div className="form">
                <h2>Area-min</h2>
                <input id="min-area"
                        type="number"
                        min="0"
                        name="minArea"
                        value={required.minArea} 
                        onChange={handleChange} /> 
        </div>
        <div className="form">
                <h2>Area-max</h2>
                <input  id="maxArea"
                        type="number"
                        min="0"
                        name="maxArea"
                        value={required.maxArea} 
                        onChange={handleChange}  />
        </div> 
        <button className="button" onClick="" >Search</button>
    </form>
    )
}
