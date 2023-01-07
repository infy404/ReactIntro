import React, { useState } from "react";
import "../App.css"
import { FaHeart, FaCartPlus } from "react-icons/fa"


const Products = (props)=>{

    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    return (
        <div>
            
            {likeCount} 
        {props.productList.map((item, index) => { //Mapping through all the elements of product list.
            return (
                //A custom CSS class "Card" is used to style the div, inline CSS used as well
                <div className="Card" style={{backgroundColor: item.backgroundColor,display: 'flex'}}>
                    {/* Displaying  All the items of the product List*/}
                    <div>
                        <h1>{item.name}</h1> 
                    </div>
                    
                    <div >
                        <img src={item.image} alt={item.name} width={100} height={100}></img>
                    </div>
                    
                    <div>                    
                        <h3> {item.price}</h3>
                    </div> 
                    <div>
                    <button onClick={()=>{
                        //Reversing the isLiked value, acting as a switch.
                        item.isLiked = !item.isLiked
                        //Increasing like count if item is liked, and decreasing if unliked., value starts at 0
                        item.isLiked? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1)
                        }}>
                        <FaHeart style={{color: item.isLiked? 'red' : 'white'}}/>
                    {/* Setting the value of the icon based on the current value. */}
                    </button>
                    <FaCartPlus/>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Products;