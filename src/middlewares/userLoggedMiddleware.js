/* codigo para JSON */
// const User = require('../models/Users');
const db = require('../database/models');

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.email;

    // const userFromCookie = User.findByField('email', emailInCookie); /* Codigo para JSON */

    if (emailInCookie) {
        req.session.userLogged = emailInCookie;
        const userFromCookie = db.User.findOne({ where: { email: emailInCookie } })

        if (emailInCookie && userFromCookie) {
            req.session.userLooged = userFromCookie
        }
    }
    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;