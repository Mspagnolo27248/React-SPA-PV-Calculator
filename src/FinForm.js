
import { useState } from "react";
import Field from "./Field"

function FinForm(){

  const [calcSolution,setCalcSolution] =useState("")



function handleClick(event){
     const result = pv(rate,fv,nper)
     setCalcSolution(result)
  }

  function pv(rate,fv,nper){
     var _pv = fv/((1+rate)**nper)
    
    }


    return(
        <div class="fin-div">
        <div class="title">Present Value Calculator</div>
        <form  >            

       
        <Field name="rate" desc="Rate" />          
        <Field name ="nper" desc="Periods" />
        <Field name ="fv" desc="Future Value" />


              <div >
                <h3 class="result">{calcSolution}</h3>
              </div>
              <button type="button" class="submit" onClick={handleClick}>Calculate</button>
            
        </form>

    </div>
    )

}

export default FinForm;