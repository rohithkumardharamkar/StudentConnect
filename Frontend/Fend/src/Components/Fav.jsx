import { useSelector } from "react-redux";
import store from "../utils/store";
import { url } from "../url";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Ct from "./Ct";

function Fav()
{
    let u=useSelector((store)=>store.post.items);

    let obj=useContext(Ct)
    let n=useNavigate()
    console.log(obj);
    useEffect(()=>
    {
  
      if(obj.cont.token=='')
        {
          n('/')
        }
    },[])
   

    
   return (
       <div>
         {
           u.map((item)=>
           {
             return(
   
   
               <div className='homecon'>
         <div className='hcon'>
           <div id='a1'>
             <img src={`${url}/imgs/${item.pic}`} alt="" id='a2' />
             <h3>{item.picname}</h3>
           </div>
           <div id='a3'>
             <img src={`${url}/imgs/${item.pimg}`} alt="" />
             
             <p>{item.descp}</p>
          
           </div>
          
   
   
         </div>
   
       </div>
             )
           })
         }
       </div>
     )
}
export default Fav;