import { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Message from "./components/Message";

function App() {
  //DEfine the initial state of the application
  const [quantity, setQuantity] = useState(0);
  const [deadLine, setDeadLine] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);

  return (
    <Fragment>
      <Header />
      <Form
        quantity={quantity}
        setQuantity={setQuantity}
        deadLine={deadLine}
        setDeadLine={setDeadLine}
        totalLoan={totalLoan}
        setTotalLoan={setTotalLoan}
      />
      {totalLoan === 0 ? (
        <Message />
      ) : (
        <Result totalLoan={totalLoan} deadLine={deadLine} quantity={quantity} />
      )}
    </Fragment>
  );
}

export default App;
