

debugger
const btn = document.querySelector(".submit")

btn.addEventListener("click",pv)



function pv(){
      debugger
const rate = parseFloat(document.querySelector("#rate").value)
const fv = parseFloat(document.querySelector("#fv").value)
const nper = parseFloat(document.querySelector("#nper").value)
 var _pv = fv/((1+rate)**nper)
document.querySelector(".result").innerHTML = formatter.format(_pv)
}

var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
    
    });