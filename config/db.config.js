module.exports = {
  // host.docker.internal   When Deployed to internal docker
    HOST: "localhost",
    USER: "test",
    PASSWORD: "password",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };