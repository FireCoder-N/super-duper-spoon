export const loginController = (req, res) => {
    const { userType, loginInput, passwordInput } = req.body;
    // console.log(req.body);
  
    if (userType === 'level_1') { // Level 1 login logic for clients (name based login)
        const pattern = /^[a-zA-Zα-ωΑ-ΩάέήίϊΐόύϋΰώΆΈΉΊΪΌΎΫΏ\s]+$/;
        // const pattern = /^[A-ZΑ-ΩΆΈΉΊΌΎΏ][a-zA-ZΑ-Ωα-ωάέήίϊΐόύϋΰώΆΈΉΊΪΌΎΫΏ]+\s[A-ZΑ-ΩΆΈΉΊΌΎΏ][a-zA-ZΑ-Ωα-ωάέήίϊΐόύϋΰώΆΈΉΊΪΌΎΫΏ]+$/;
        if (pattern.test(loginInput)) {
            res.redirect('/home');
        } else {
            res.redirect('/');
        }
    }
    // } else if (userType === 'level-2') {
    //   // Level 2 login logic for staff (e.g., ID-based login)
    //   // ...
  
    //   // Assuming the login is successful
    //   res.json({ success: true, redirectTo: '/staff-page' });
    // } else if (userType === 'level-3') {
    //   // Level 3 login logic for admins (e.g., ID and password-based login)
    //   // ...
  
    //   // Assuming the login is successful
    //   res.json({ success: true, redirectTo: '/admin-page' });
    else {
      // Invalid userType or login failed
      res.redirect('/');
    }
};

export const checkAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/');
        return next();
    }
    next();
}