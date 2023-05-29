export const formController = (req, res) => {
    console.log(req.body['type']);

    if (req.session.user) {
        req.session.formaccess = req.body;
        res.redirect('/form?t=' + req.body['type']);
    } else {
        res.redirect('/');
    }
};