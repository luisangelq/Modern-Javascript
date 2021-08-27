// import { useState } from "react";
import Swal from "sweetalert2";

import { calculateTotals } from "../helpers"

const Form = (props) => {
  const { quantity, setQuantity, deadLine, setDeadLine, setTotalLoan } = props;

  const calculateLoan = (e) => {
    e.preventDefault();
    //validate
    if (quantity === 0 || deadLine === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All Fields Must Be Filled",
      });
      return;
    }

    const total = calculateTotals(quantity, deadLine);
    setTotalLoan(total);

    Swal.fire({
      icon: "success",
      title: "Loan Calculated",
      text: "Total Loan Amount: " + total,
    });
  };

  return (
    <form onSubmit={calculateLoan}>
      <div className="row">
        <div>
          <label>Loan Amount</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Example: 3000"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Deadline to Pay</label>
          <select
            className="u-full-width"
            onChange={(e) => setDeadLine(parseInt(e.target.value))}
          >
            <option value="">-Select-</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
            <option value="24">24 Months</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calculate"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
