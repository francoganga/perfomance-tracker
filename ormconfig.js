require('dotenv').config({path: 'env'});


let options;

if (process.env.NODE_ENV === 'dev') {
  options = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "appunajServer",
    password: 1234,
    database: "appunajServer",
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["src/migration/*.ts"],
    cli: {
      migrationsDir: "src/migration"
    }
  }
} else {
  options = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["src/migration/*.ts"],
    cli: {
      migrationsDir: "src/migration"
    }
  }
}

module.exports = options;
