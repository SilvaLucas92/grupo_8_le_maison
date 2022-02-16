

const userLogged = (req, res, next) => {
    
    if(req.session.userlogged) {
        return res.redirect('userProfile', )
    }
    next();
}

module.exports = userLogged;