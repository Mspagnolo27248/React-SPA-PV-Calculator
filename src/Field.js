import { useState } from "react";

function Field(props){

  const [name,setParams] =useState({
    
  })
  function handleChange(event){
    const {rate,nper,fv} = event.target;
  }
  
    return(
        <div class="input-container ic2">
        <input id={props.name} name={props.name} class="input" type="text" placeholder=" " onChange={handleChange}/>
        <div class="cut"></div>
        <label for={props.name} class="placeholder">{props.desc}</label>
      </div>

    
    )
}
export default Field;


//{name}