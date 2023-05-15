// Express.js
import express from 'express'
// Handlebars (https://www.npmjs.com/package/express-handlebars)
import { engine } from 'express-handlebars'

const app = express()
const router = express.Router();
const port = process.env.PORT || '3001';



// Specify that the "public" folder will contain the static files
app.use(express.static('public'))

// Use Handlebars as a template engine.
app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');


// ---------------------------------------------
app.use(router); // load the router
app.use(notFound); // error 404-not found
  

// Define routes
router.route('/').get(login);
router.route('/floorplan').get(floorplan);
router.route('/home').get(homepage);

// ---------------------------------------------
// Define the route handlers
function homepage(req, res) {
    res.render('home');
}

function floorplan(req, res) {
    const f = req.query.f;
    const pattern = /^(-1|[0-3])$/;

    if (!f) 
        res.redirect('/');
    else if (!pattern.test(f)) 
        badRequest(req, res);
    else
        res.render('floor', {floor: f});
}

function login(req, res) {
    res.render('login');
}

// ---------------------------------------------
//error handling
function notFound(req, res) {
    const error = new Error('Η σελίδα δεν βρέθηκε');
    error.status = 404;
    res.render('error', {code: error.status, message: error.message});
}

function badRequest(req, res) {
    const error = new Error('Μη έγκυρο αίτημα');
    error.status = 400;
    res.render('error', {code: error.status, message: error.message});
}



const server = app.listen(port, () => { console.log(`http://127.0.0.1:${port}`) });