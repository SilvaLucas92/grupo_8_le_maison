function userLogged (req, res, next) {
    res.locals.logged = false;
    if ( req.session && req.session.userLogged) {
        res.locals.logged = true;
        res.locals.data = req.session.userLogged;
    }
    next();
}

module.exports = userLogged; 
