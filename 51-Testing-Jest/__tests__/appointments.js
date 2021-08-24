import Citas from '../js/classes/Citas.js';

describe('test appointment Class', () => {
    const citas = new Citas();

    const id = Date.now();

    test('Add new appointment', () => {
        const citaObj = {
            id,
            mascota: "Hook",
            propietario: "Luis",
            telefono: "3326264356",
            fecha: "2018-01-01",
            hora: "10:00",
            sintomas: "No duerme",
        };

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();   

    })
    
    test('Update appointment', () => {
        const citaUpdated = {
            id,
            mascota: "New Pet",
            propietario: "Luis",
            telefono: "3326264356",
            fecha: "2018-01-01",
            hora: "10:00",
            sintomas: "No duerme",
        };
        citas.editarCita(citaUpdated);

        expect(citas).toMatchSnapshot();
    })

    test('Delete appointment', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
})