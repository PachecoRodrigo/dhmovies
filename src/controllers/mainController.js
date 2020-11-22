
/*** SHOW INDEX.HTML ***/
const controller = {
    index: function(req, res, next) {
        res.render('index', { title: 'Pagina de Inicio' });
        }
    };

    module.exports = controller;