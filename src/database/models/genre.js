/************ Requirements *************/
const {sequelize, DataTypes} = require('sequelize');

/********* Own Exports ***********/
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        name: DataTypes.STRING,
        ranking: DataTypes.INTEGER, 
        active: DataTypes.INTEGER
    
    });
    Genre.associate = (models=>{
        Genre.hasMany(models.Movie)

    }); 
    return Genre
    }