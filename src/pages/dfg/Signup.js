import React,{useContext,useState} from 'react'
import UserContext from '../../UserContext'
import { Link } from 'react-router-dom';
function Signup() {
    const {name,setName}=useContext(UserContext);
const [re,setRe]=useState({username:'',password:''});
const [arr,setArr]=useState([{}]);
const handleSubmit=(e)=>{
  setArr((values)=>[...values,re]);
  setRe({username:'',password:''});
  setName((values)=>[...values,re]);
  e.preventDefault();
    
}
const handleChange=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setRe((values)=>({...values,[name]:value}));

}
  return (
    <div>
     
      <form onSubmit={handleSubmit}>
         <label>
          Enter username:
          <input type='text' name='username' value={re.username || ""} onChange={handleChange}/>

         </label>
         <label>
          Enter password:
          <input type='text' name='password' value={re.password} onChange={handleChange}/>

         </label>
         <button type="submit">
                  submit
         </button>
      </form>
      <div>

     
           {
            arr.map((ar,index)=>(
              <div key={index}>
                username is:{ar.username}
                </div>
                
            )
                   

            )
           }
           <Link to="/login">
            login
           </Link>
            </div>
    </div>
  )
}

export default Signup
