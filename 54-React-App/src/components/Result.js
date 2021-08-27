const Result = ({totalLoan, deadLine, quantity}) => {

    return(
        <div className="resultado">
            <h2>Sumary</h2>
            <p>Loan Requested: ${quantity}</p>
            <p>DeadLine ${deadLine} Months</p>
            <p>Monthly Payment: {( totalLoan / deadLine).toFixed(2)}</p>
            <p>Total To Pay: {(totalLoan).toFixed(2)}</p>
        </div>
    )
}

export default Result;