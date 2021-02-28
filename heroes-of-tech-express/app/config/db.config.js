module.exports = {
    HOST: "<IP ADDRESS>",
    USER: "jarvis",
    PASSWORD: "**********",
    DB: "heroesoftech",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };