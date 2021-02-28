module.exports = (sequelize, Sequelize) => {

    const Sidekick = sequelize.define("sidekick", {
            device_name: {
                type: Sequelize.STRING
              },
            device_type: {
                type: Sequelize.STRING
              },
            processor: {
                type: Sequelize.STRING
              },
            RAM: {
                type: Sequelize.INTEGER
              },
            total_storage: {
                type: Sequelize.INTEGER
              },
            sidekick_points: {
                type: Sequelize.INTEGER
              }
    });
  
    return Sidekick;
  };