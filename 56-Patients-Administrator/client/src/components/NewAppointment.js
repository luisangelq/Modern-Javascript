const NewAppointment = () => {
  return (
    <form className="bg-white p-5 bordered">
      <div className="form-group">
        <label htmlFor="nombre">Nombre Mascota</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="nombre"
          name="nombre"
          placeholder="Nombre Mascota"
        />
      </div>

      <div className="form-group">
        <label htmlFor="propietario">Nombre Propietario</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="propietario"
          name="propietario"
          placeholder="Nombre Propietario"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          className="form-control form-control-lg"
          id="telefono"
          name="telefono"
          placeholder="Teléfono"
        />
      </div>

      <div className="form-group">
        <label htmlFor="fecha">Fecha Alta</label>
        <input
          type="date"
          className="form-control form-control-lg"
          id="fecha"
          name="fecha"
        />
      </div>

      <div className="form-group">
        <label htmlFor="hora">Hora Alta</label>
        <input
          type="time"
          className="form-control form-control-lg"
          id="hora"
          name="hora"
        />
      </div>

      <div className="form-group">
        <label htmlFor="sintomas">Síntomas</label>
        <textarea className="form-control" name="sintomas" rows="6"></textarea>
      </div>

      <input
        type="submit"
        className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
        value="Crear Cita"
      />
    </form>
  );
};

export default NewAppointment;
