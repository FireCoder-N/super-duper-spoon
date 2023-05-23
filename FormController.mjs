export const formController = (req, res) => {
    console.log(req.body);

    if (req.session.user) {
        req.session.formaccess = req.body;
        res.redirect('/form');
    } else {
        res.redirect('/');
    }
};

export const uploadToDB = (req, res) => {
};