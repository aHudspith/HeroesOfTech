module.exports = {
    HOST: "<IP Address>",
    USER: "jarvis",
    PASSWORD: "<Password>",
    DB: "heroesoftech",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };