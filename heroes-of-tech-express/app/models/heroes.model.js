module.exports = (sequelize, Sequelize) => {
    const Heroes = sequelize.define("heroes", {
        first_name: {
            type: Sequelize.STRING
          },
        last_name: {
            type: Sequelize.STRING
          },
        email_address: {
            type: Sequelize.STRING
          },
        hero_points: {
            type: Sequelize.INTEGER
          }
    });
  
    return Heroes;
  };