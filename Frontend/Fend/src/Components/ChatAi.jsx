import axios from "axios";
import { useRef, useState } from "react";

function ChatAi()
{
    let [c,setC]=useState([]);
    let t=useRef()
    function fun()
    {
        setC([...c,t.current.value])
        setC([...c,t.current.value])
      
            axios.post("http://localhost:5000/post/bot",{"qsn":t.current.value}).then((el)=>{
                setC([...c,el.data])
            })
    }
    return(<div>
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