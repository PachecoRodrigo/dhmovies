const controller = {
    /*** SHOW ALL MOVIE ***/
    all:function(req, res, next) {
        res.render('movies', { title: 'Todas las peliculas' });
    },
    
    /*** SHOW ONE MOVIE ***/
    detail:(req, res, next) =>{
        res.render('movies', { title: 'Detalle de 1 pelicula' });
    },
    
    /*** CREATE NEW MOVIE ***/ 
    new:(req, res, next) =>{
        res.render('movies', { title: 'Formulario de creacion' }); 
    },
    create:(req, res, next) =>{
        
    },

    /*** EDIT MOVIE ***/ 
    edit:(req, res, next) =>{

    },
    update:(req, res, next) =>{

    },
    
    /*** DELETE MOVIE ***/
    destroy:(req, res, next) =>{

    },

    /*** SHOW RECOMMENDED ***/
    recommended:(req, res, next) =>{
        res.render('movies', { title: 'Recomedadas' });
    },
    
    /*** SHOW SEARCH ***/ 
    search:(req, res, next) =>{
        res.render('movies', { title: 'Resultado de buesqueda' });

    }
};

module.exports = controller