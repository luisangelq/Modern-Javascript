fetch("http://localhost:4000/patients")
  .then((response) => response.json())
  .then((data) => {
    showAppointments(data);
  });

const showAppointments = (appointments) => {
  const appointmentContent = document.querySelector("#appointments");

  let appointmentsHTML = "";

  appointments.forEach((appointment) => {
    appointmentsHTML += `<div class="p-5 list-group-item list-group-item-action flex-column align-item-start">
            <div class="d-flex justify-content-between mb-4">
                <h3>${appointment.name}</h3>

                <small class="text-muted">
                    ${appointment.date} - ${appointment.time}
                </small>
            </div>

            <p class="mb-0">${appointment.symptoms}</p>

            <div class="contacto py-3">
                <p>Owner: ${appointment.owner}</p>
                <p>Phone: ${appointment.phone}</p>
            </div>
        </div>
        `;
  });

  appointmentContent.innerHTML = appointmentsHTML;
};
