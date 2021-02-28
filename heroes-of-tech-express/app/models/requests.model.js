module.exports = (sequelize, Sequelize) => {
    const Requests = sequelize.define("requests", {
      request_type: {
        type: Sequelize.STRING
      },
      request_status: {
        type: Sequelize.INTEGER
      }
    });
  
    return Requests;
  };