import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import clientAxios from "./config/axios";

//Components
import Patients from "./components/Patients";
import NewAppointment from "./components/NewAppointment";
import Appointment from "./components/Appointment";

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = () => {
      clientAxios
        .get("patients")
        .then((res) => {
          setAppointments(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAppointments();
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Patients appointments={appointments} />}
        />
        <Route exact path="/new-appointment" component={NewAppointment} />
        <Route exact path="/appointment/:id" component={Appointment} />
      </Switch>
    </Router>
  );
}

export default App;
