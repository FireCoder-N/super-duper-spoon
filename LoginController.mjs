export const loginController = (req, res) => {
    const { userType, username, password } = req.body;
    //!TEST:
    const admin = { username: 'admin', password: 'admin' };
    const staff = { id: '12345'};

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
        if (username === staff.id) {
            req.session.user = req.body;
            res.redirect('/home'); //TODO staff-page

        } else res.redirect('/');
    
    }
    else if (userType === 'level_3') {
        //* Level 3 login logic for admins (ID and password-based login)
        if (username === admin.username && password === admin.password) {
            req.session.user = req.body;
            res.redirect('/home'); //TODO admin-page

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
