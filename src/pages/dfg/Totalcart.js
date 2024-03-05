import React,{useState,useContext} from 'react'
import UserContext from '../../UserContext'
function Totalcart() {
    const {car,setCar}=useContext(UserContext)
  return (
    <div>
       {
              car.map((ju)=>(
               <div>
                price of an item:{ju.price}
                image is <img src={ju.image} style={{height:'100px',width:'100px'}}/>
               
                </div>
              ))
            }
    </div>
  )
}

export default Totalcart
