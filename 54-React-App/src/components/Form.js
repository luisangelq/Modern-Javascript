// import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Form = ({quantity, setQuantity, deadLine, setDeadLine}) => {
  
    // const [error, setError] = useState(false);

    const calculateLoan = (e) => {
        e.preventDefault();
        const MySwal = withReactContent(Swal)
        //validate
        if (quantity === 0 || deadLine === "") {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    }

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
          <select className="u-full-width" onChange={e => setDeadLine(parseInt(e.target.value))}>
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
