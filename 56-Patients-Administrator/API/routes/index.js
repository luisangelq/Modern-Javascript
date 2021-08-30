import express from "express";
import {
  newPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} from "../controllers/patientController.js";

const router = express.Router();

//get all patients
router.get("/patients", getPatients);

//get a patient by id
router.get("/patients/:id", getPatientById);

//Post a new patient
router.post("/patients", newPatient);

//Update a patient
router.put("/patients/:id", updatePatient);

//Delete a patient
router.delete("/patients/:id", deletePatient);

export default router;
