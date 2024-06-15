module.exports = {
    ensureGuest: function (req, res, next) {
        if (req.cookies['name']) {
            return res.redirect('/about')
        } else {
            return next();
        }
    },

    ensureAuth: function (req, res, next) {
        if (!req.cookies['name']) {
            return res.redirect('/')
        } else {
            return next();
        }
    }
}