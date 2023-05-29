export const notFound = (req, res) => {
    const error = new Error('Η σελίδα δεν βρέθηκε');
    error.status = 404;
    res.render('error', {code: error.status, message: error.message});
}

export const badRequest = (req, res) => {
    const error = new Error('Μη έγκυρο αίτημα');
    error.status = 400;
    res.render('error', {code: error.status, message: error.message});
}

export const forbidden = (req, res) => {
    const error = new Error('Απαγορευμένη πρόσβαση');
    error.status = 403;
    res.render('error', {code: error.status, message: error.message});
}