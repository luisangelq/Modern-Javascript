import { Fragment } from "react";
import { Link } from "react-router-dom";

const Patients = ({ appointments }) => {
  // if (appointments.length === 0) return null;
  return (
    <Fragment>
      <h1 className="my-5"> Patients Manager</h1>

      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={"/new-appointment"}
              className="btn btn-info text-uppercase py-2 px-5 font-weight-bold"
            >
              Add Appointment
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              {appointments.map((appointment) => (
                <Link
                  key={appointment._id}
                  to={`/appointment/${appointment._id}`}
                  className="p-5 list-group-item list-group-item-action flex-column align-item-start"
                >
                  <div className="d-flex justify-content-between mb-4">
                    <h3>{appointment.name}</h3>

                    <small className="text-muted">
                      {appointment.date} - {appointment.time}
                    </small>
                  </div>

                  <p className="mb-0">{appointment.symptoms}</p>

                  <div className="contacto py-3">
                    <p>Owner: {appointment.owner}</p>
                    <p>Phone: {appointment.phone}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Patients;
