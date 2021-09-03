import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import clientAxios from "./config/axios";

//Components
import Patients from "./components/Patients";
import NewAppointment from "./components/NewAppointment";
import Appointment from "./components/Appointment";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [consult, setConsult] = useState(true);

  useEffect(() => {
    const getAppointments = () => {
      clientAxios
        .get("patients")
        .then((res) => {
          setAppointments(res.data);

          setConsult(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAppointments();
  }, [consult]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Patients appointments={appointments} />}
        />
        <Route
          exact
          path="/new-appointment"
          component={() => <NewAppointment setConsult={setConsult} />}
        />
        <Route
          exact
          path="/appointment/:id"
          render={(props) => {
            const appointment = appointments.filter(
              (appointment) => appointment._id === props.match.params.id
            );

            return <Appointment appointment={appointment[0]} setConsult={setConsult}/>;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
