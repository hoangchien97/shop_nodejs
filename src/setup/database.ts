require("pg").defaults.parseInt8 = true;
import { Sequelize } from "sequelize-typescript";
import {
  ProductModel
} from "../models";
const config = require("config");
const sequelize = new Sequelize({
  ...config.get("database"),
});

const models = [
  ProductModel
];

sequelize.authenticate().then(() => {
  console.log("Connection has been been established successfully");
}).catch(err => {
  console.log("Unable to connect to the database", err);
});

const initDatabaseModels = () => {
  sequelize.addModels(models);
  console.log("Sequelize models initiated");
};

export { initDatabaseModels, sequelize, models };
