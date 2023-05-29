import { findStaff } from "./db_controllers/findstaff.mjs";
import { findAdmin} from "./db_controllers/findadmin.mjs";
import crypto from 'crypto';

export const loginController = async (req, res) => {
    const { userType, username, password } = req.body;

    const hash = crypto.createHash('sha256');
    hash.update(password);

    console.log(req.body);
  
    if (userType === 'level_1') { // Level 1 login logic for clients (name based login)
        const pattern = /^[a-zA-Zα-ωΑ-ΩάέήίϊΐόύϋΰώΆΈΉΊΪΌΎΫΏ]+\s?[a-zA-Zα-ωΑ-ΩάέήίϊΐόύϋΰώΆΈΉΊΪΌΎΫΏ]*$/;
        if (pattern.test(username) && username !== undefined && username !== '') {
            req.session.user = req.body;
            res.redirect('/home');

        } else res.redirect('/');
    }
    else if (userType === 'level_2') { 
        //* Level 2 login logic for staff (ID and password-based login)
        const valid = await findStaff(username);
        if (valid) {
            req.session.user = req.body;
            res.redirect('/home'); //TODO staff-page

        } else res.redirect('/');
    
    }
    else if (userType === 'level_3') {
        //* Level 3 login logic for admins (ID and password-based login)
        const valid = await findAdmin(username, hash.digest('hex'));
        if (valid) {
            req.session.user = req.body;
            req.session.admin = true;
            res.redirect('/submissions'); //TODO admin-page

        } else res.redirect('/');
    }
    else {
      // Invalid userType or login failed
      res.redirect('/');
    }
};

export const checkAuth = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/');
    } else {
        next();
    }
}

export const adminAuth = (req, res, next) => {
    if (!req.session.admin){
        res.redirect('/');
    } else {
        next();
    }
}
