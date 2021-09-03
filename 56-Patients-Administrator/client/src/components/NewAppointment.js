import { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import clientAxios from "../config/axios";

const NewAppointment = (props) => {

  console.log(props);
  const [appointment, setAppointment] = useState({
    name: "",
    owner: "",
    date: "",
    time: "",
    phone: "",
    symptoms: "",
  });

  //Read the form values
  const updateState = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const createNewAppointment = (e) => {
    e.preventDefault();

    clientAxios
      .post("/patients", appointment)
      .then((res) => {
        console.log(res);
        props.setConsult(true);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <h1>Create New Appointment</h1>

      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-info text-uppercase py-2 px-5 font-weight-bold"
            >
              Back
            </Link>
          </div>
        </div>

        <div className="col-md-8 mx-auto">
          <form
            onSubmit={createNewAppointment}
            className="bg-white p-5 bordered"
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre Mascota</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                name="name"
                placeholder="Pet Name"
                onChange={updateState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="propietario">Nombre Propietario</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="owner"
                name="owner"
                placeholder="Owner's Name"
                onChange={updateState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control form-control-lg"
                id="phone"
                name="phone"
                placeholder="Phone"
                onChange={updateState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Discharge Date</label>
              <input
                type="date"
                className="form-control form-control-lg"
                id="date"
                name="date"
                onChange={updateState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Discharge Time</label>
              <input
                type="time"
                className="form-control form-control-lg"
                id="time"
                name="time"
                onChange={updateState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="symptoms">Symptoms</label>
              <textarea
                className="form-control"
                name="symptoms"
                rows="6"
                onChange={updateState}
              ></textarea>
            </div>

            <input
              type="submit"
              className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
              value="Crear Cita"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(NewAppointment) ;
