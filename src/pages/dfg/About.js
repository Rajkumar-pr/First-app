
import React,{useState,useContext,useEffect} from 'react'
import UserContext from '../../UserContext';
import Signup from './Signup';
import { Link } from 'react-router-dom';
function About() {
  const {user,setUser}=useContext(UserContext)
 const [count,setCount]=useState(0);
 const [res,setRes]=useState(0);
 useEffect(()=>{
      setRes(2*count);
 },[count])
 const dd=()=>{
  setCount(count+1);
 }
  return (
    <div>
     hi Ajinkya Kulkarni
     the count is:{count}
     <br/>
     the result obtain is {res}
          <button onClick={()=>dd()}>
            increment
          </button>
                usr name is:{user}
                <div>
                <Link to='/signup'>
                  <button>
                    link
                  </button>
                </Link>
                </div>
               
    </div>
  )
}

export default About;


