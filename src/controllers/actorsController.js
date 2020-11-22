const controller = {
    /*** SHOW ALL ACTORS ***/
    all:function(req, res, next) {
        res.render('actors', { title: 'Todos los actores' });
    },
    
    /*** SHOW ONE ACTORS ***/
    detail:(req, res, next) =>{

    },
    
    /*** CREATE NEW ACTORS ***/ 
    new:(req, res, next) =>{

    },
    create:(req, res, next) =>{

    },

    /*** EDIT ACTORS ***/ 
    edit:(req, res, next) =>{

    },
    update:(req, res, next) =>{

    },

    /*** DELETE ACTORS ***/ 
    destroy:(req, res, next) =>{

    },

    /*** SHOW RECOMMENDED ***/
    recommended:(req, res, next) =>{

    },

    /*** SHOW SEARCH ***/ 
    search:(req, res, next) =>{

    }

    };

module.exports = controller;