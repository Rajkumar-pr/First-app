import React,{useState,useContext} from 'react'
import { MenuList } from '../../data/data'
import {Box} from "@mui/material"
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';
function Carte() { 
  const {car,setCar}=useContext(UserContext);
  const ght=(re)=>{
    setCar([...car,re])
    setTotal((tot)=>tot+re.price);
  }
  const [total,setTotal]=useState(0);
  return (
    <div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
           {
            MenuList.map((menu)=>(
<div style={{ display:'flex',flexWrap:'wrap'}}>
  <Box style={{width:'500px',height:'500px',border:'solid red'}} onClick={()=>{ght(menu)}}>  image:  <img src={menu.image} style={{height:'300px',width:'300px'}} alt="ima"/></Box>
 
  
</div>

            ))
          }
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
          total price is :{total}
          </div>
          <Link to='/total'>
                   <button>
                    next
                   </button>
          </Link>
    </div>
  )
}

export default Carte
