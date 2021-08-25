import { Fragment, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Form from './components/Form';

function App() {
  //DEfine the initial state of the application
  const [quantity, setQuantity] = useState(0);
  const [deadLine, setDeadLine] = useState("");


  return (
    <Fragment>
      <Header />
      <Form
        quantity={quantity}
        setQuantity={setQuantity}
        deadLine={deadLine}
        setDeadLine={setDeadLine}
      />
    </Fragment>
  );
}

export default App;
