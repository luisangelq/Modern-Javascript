//Create express server with imported routes
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//Connect to database
db.authenticate()
  .then(() => console.log("DB conected") )
  .catch(err => console.log(err));

//Add Body Parser
app.use(express.urlencoded({ extended: true }));

//enable pug
app.set('view engine', 'pug');

//Define static folder
app.use(express.static('public'));

app.locals.currentYear = new Date().getFullYear();

//Add router
app.use('/', router); 

//Start server
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
  console.log(`Server is working on host: ${host} and port: ${port}`);
});

