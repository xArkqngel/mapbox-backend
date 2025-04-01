import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mapboxdb",
  "postgres",
  "mysecretpassword",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
