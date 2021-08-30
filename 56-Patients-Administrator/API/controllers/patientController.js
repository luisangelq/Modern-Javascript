import patientModel from '../models/Patient.js';

//TODO: Insert new client into database
const newPatient = async (req, res, next) => {
    //Create object from request body
    const patient = new patientModel(req.body);
    try {
        await patient.save();
        console.log(patient);
        res.json({message : 'Patient added successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
}

const getPatients = async (req, res, next) => {
    try {
        const patients = await patientModel.find();
        res.json(patients);
    } catch (error) {
        console.log(error);
        next();
    }
}

const getPatientById = async (req, res, next) => {
    try {
        const patient = await patientModel.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Update patient
const updatePatient = async (req, res, next) => {
    try {
        const patient = await patientModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Delete patient
const deletePatient = async (req, res, next) => {
    try {
        await patientModel.findByIdAndDelete(req.params.id);
        res.json({message: 'Patient deleted successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
}


export {
    newPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient
}