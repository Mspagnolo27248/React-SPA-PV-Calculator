

function Field(props){
  
  
    return(
        <div class="input-container ic2">
        <input id={props.name} name={props.name} class="input" type="text" value={props.value}
        placeholder=" " onChange={props.handleChange}/>
        <div class="cut"></div>
        <label for={props.name} class="placeholder">{props.desc}</label>
      </div>

    
    )
}
export default Field;


