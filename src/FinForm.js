
import { useState } from "react";
import Field from "./Field"

function FinForm(){

  const [calcSolution,setCalcSolution] =useState("")
  const [params ,setParams] = useState({
    npr:"",
    rate:"",
    pv:""
  })


 function handleChange(event){
   const {name,value} = event.target
   setParams(prevState => ({
    ...prevState,
    [name]: value
    }));
  } 

function handleClick(e){     
     const result = pv(params.rate,params.fv,params.nper)
     setCalcSolution(result)     
  }

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD', 
  });

  function pv(rate,fv,nper){
     const _fv = parseFloat(fv)
     const _rate = parseFloat(rate)
     const _nper = parseFloat(nper)
     var _pv = _fv/((1+_rate)**_nper)
     return _pv
    }


    return(
        <div class="fin-div">
        <div class="title">Present Value Calculator</div>
        <form  >          

        <Field name ="fv" desc="Future Value" handleChange = {handleChange}/>
        <Field name="rate" desc="Rate" handleChange = {handleChange}/>          
        <Field name ="nper" desc="Periods" handleChange = {handleChange} />
        <Field name ="pv" desc="Present Value" value = {formatter.format(calcSolution)} readonly/>

        <div >
          <h3 class="result">PV: = {formatter.format(calcSolution)}</h3>
        </div>
        <button type="button" class="submit" onClick={handleClick}>Calculate</button>
      
        </form>

    </div>
    )

}

export default FinForm;