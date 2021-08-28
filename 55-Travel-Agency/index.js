//Create express server with imported routes
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Connect to database
db.authenticate()
  .then(() => console.log("DB conected") )
  .catch(err => console.log(err));

const port = process.env.PORT || 4000;

//Add router
app.use('/', router); 

//enable pug
app.set('view engine', 'pug');

//Define static folder
app.use(express.static('public'));

app.locals.currentYear = new Date().getFullYear();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

