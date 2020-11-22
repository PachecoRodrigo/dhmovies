
/*** SHOW LOGIN ***/
const controller = {
    index: function(req, res, next) {
        res.render('users', {title: 'Pagina de usuarios'})
        }
    };

    module.exports = controller;
