import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { url } from "../url";
import { useNavigate } from "react-router-dom";
import Ct from "./Ct";

function ChatAi()
{
    
    
    let obj=useContext(Ct)
    let n=useNavigate()
    useEffect(()=>
    {
  
      if(obj.cont.token=='')
        {
          n('/')
        }
    },[])
   
    let [c,setC]=useState([]);
    let t=useRef()
    function fun()
    {
        setC([...c,t.current.value])
        setC([...c,t.current.value])
      
            axios.post(`${url}/post/bot`,{"qsn":t.current.value}).then((el)=>{
                setC([...c,el.data])
            })
    }
    return(<div children="blac">
        <div className="textcon">
            <div>
                
          <h3>YOU</h3> <input type="text" placeholder="Enter your question" ref={t}/><button onClick={fun}>Send</button>

            </div>
        </div>
        <div className="anscon">
            {
                c.map((el)=>
                {
                    return(<div><h4>AI</h4>{el}</div>)
                })
            }
           
           
        </div>

    </div>)

}
export default ChatAi;