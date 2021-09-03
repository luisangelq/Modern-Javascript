import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

const Appointment = (props) => {
  if (!props.appointment) {
    props.history.push("/");
    return null;
  }

  const deleteAppointment = async (id) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          clientAxios.delete(`/patients/${id}`).then((res) => {
            console.log(res);
            props.setConsult(true);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Appointment Removed",
              showConfirmButton: false,
              timer: 1500,
            });
            props.history.push("/");
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { name, owner, phone, date, time, symptoms, _id } = props.appointment;

  return (
    <Fragment>
      <h1 className="my-5">Appointment Name: {name} </h1>

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

          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-colum align-items-center">
                <div className="d-flex justify-content-between mb-4">
                  <h3>{name}</h3>
                  <small className="text-muted">
                    {date} - {time}
                  </small>
                </div>

                <p className="mb-0">{symptoms}</p>
                <div className="contacto py-3">
                  <p>Owner: {owner}</p>
                  <p>Phone: {phone}</p>
                </div>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-danger col text-uppercase py-2 px-5 font-weight-bold"
                    onClick={() => deleteAppointment(_id)}
                  >
                    Delete &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Appointment);
