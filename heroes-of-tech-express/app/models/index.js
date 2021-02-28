const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
   dialect: dbConfig.dialect,
   operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.heroes = require("./heroes.model.js")(sequelize, Sequelize);
db.sidekick = require("./sidekick.model.js")(sequelize, Sequelize);
db.requests = require("./requests.model.js")(sequelize, Sequelize);

db.heroes.hasMany(db.sidekick, { as: "sidekick" });
db.heroes.hasMany(db.requests, { as: "requests" });
db.sidekick.hasMany(db.requests,{ as: "requests"});
db.sidekick.belongsTo(db.heroes, {
  foreignKey: "id",
  as: "current_hero_id",
});
db.requests.belongsTo(db.heroes, {
  foreignKey: "id",
  as: "requestor_id",
});
db.requests.belongsTo(db.sidekick, {
  foreignKey: "id",
  as: "sidekick_id",
});
module.exports = db;