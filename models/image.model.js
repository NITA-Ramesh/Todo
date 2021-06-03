module.exports = (sequelize, Sequelize) => {
    const IMAGE = sequelize.define("images", {
        userId: Sequelize.INTEGER,
       imageType: Sequelize.STRING,
       imageName: Sequelize.STRING,
       imageData: Sequelize.BLOB("long")
    });
  
    return IMAGE;
  };