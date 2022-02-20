
import FinForm from "./FinForm";



function App() {
  return (
    <div className="App">

      
      <FinForm />

      <div class="right-block" style={{ float: "left", width: "75%" }}>

        <div style= {{textAlign:"center",marginBottom:"50px"}}>
          <h1>Present Value Formula</h1>
          <br />
          <img src="/img/img-pv.png" alt="Present Value Formula" />
        </div>

     
      <div style={{ height: "500px" }}>
        <ul >
          <li>[PV] = Present Value: today's value of a cashflow that is received at a future date. The formulas is used to calculate the present value of a future payment discounted at a given rate over the number of periods.
            This represents what you should pay today for that future cashflow. </li>
          <br />
          <li>[FV] = Future Value: cashflow payment to be received in the future.</li>
          <br />
          <li>[rate] = Discount Rate: the discount rate that will be compounded over the periods.</li>
          <br />
          <li>[nper] = Compounding Periods: total compounding periods, this needs to be in the same periodicty as the rate for example if the rate is monthly then enter the number of months.</li>
        </ul>
      </div>

    </div>
   </div>

  );
}

export default App;
