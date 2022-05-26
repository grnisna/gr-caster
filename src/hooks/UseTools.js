import { useEffect, useState } from "react";

const UseTools = () =>{
const [tools,setTools] = useState([]);


useEffect(()=>{
    fetch('https://aqueous-cove-84612.herokuapp.com/tool')
    .then(res => res.json())
    .then( data => setTools(data))
},[]);

return [tools];

}

export default UseTools;