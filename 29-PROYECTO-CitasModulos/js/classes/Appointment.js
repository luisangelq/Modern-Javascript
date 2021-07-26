class Appointment {
  constructor() {
    this.appointments = [];
  }

  addAppointment(appointment) {
    this.appointments = [...this.appointments, appointment];

    console.log(this.appointments);
  }

  editAppointment(appointmentUpdated) {
    this.appointments = this.appointments.map((appointment) => {
      if (appointment.id === appointmentUpdated.id) {
        return appointmentUpdated;
      }
      return appointment;
    });
    console.log(this.appointments);
  }

  deleteAppointment(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
    console.log(this.appointments);
  }
}

export default Appointment;
