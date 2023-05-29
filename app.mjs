// Express.js
import express from "express";
import session from "express-session";

// import crypto from "crypto";

// Handlebars (https://www.npmjs.com/package/express-handlebars)
import { engine } from "express-handlebars"

// Controllers
import { notFound } from "./controllers/ErrorHandling.mjs"
import { loginController, checkAuth, adminAuth } from "./controllers/Login.mjs"
import { login, homepage, floorplan, form, privacy, admin } from "./controllers/Routes.mjs"
import { formController } from "./controllers/Form.mjs"

import { connectDb, getDb } from "./controllers/db_controllers/db.mjs"
import { uploadToDB } from "./controllers/db_controllers/upload.mjs"
import { deletesubmission } from "./controllers/db_controllers/delete.mjs";
import { getlist } from "./controllers/db_controllers/viewSubmissions.mjs";


import dotenv from "dotenv";
dotenv.config();

const app = express()
const router = express.Router();
const port = process.env.PORT || "3001";

// Specify that the "public" folder will contain the static files
app.use(express.static("public"))

// Use Handlebars as a template engine.
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");


// ---------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON in request body

// session middleware
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30*60*1000, sameSite: true }
}));

app.use(router); // load the router
app.use(notFound); // error 404-not found

// ---------------------------------------------
// Define routes
router.route("/").get(login);
router.route("/").post(loginController);
router.route("/home").get(checkAuth, homepage);
router.route("/floorplan").get(checkAuth, floorplan);
router.route("/floorplan").post(formController);
router.route("/form").get(checkAuth, form);
// router.route("/test").get(findStaff);
router.route("/form").post(uploadToDB);
router.route("/privacy").get(privacy);
router.route("/submissions").get(adminAuth, admin);
router.route("/delete").get(adminAuth, deletesubmission);
router.route("/api/submissions").get(getlist);

// ---------------------------------------------
let db;
connectDb((err) => {
	if(!err) {
		app.listen(3001, () => {
			console.log(`https://127.0.0.1:${port}`);
		});
		db = getDb();
	}
    else {
        console.log(err);
    }
});