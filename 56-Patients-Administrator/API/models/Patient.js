import mongoose from "mongoose";
const Schema = mongoose.Schema;

const patientModel = new Schema({
  name: {
    type: String,
    trim: true,
  },
  owner: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
  },
  symptoms: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Patient", patientModel);

// module.exports = mongoose.model("Patient", patientSchema); 