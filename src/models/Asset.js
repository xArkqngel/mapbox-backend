import {DataTypes} from 'sequelize'
import { sequelize } from "../database/database.js";
import {User} from './User.js'

export const Asset = sequelize.define("Asset", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("well", "motor", "transformer"),
    allowNull: false,
  },
});

User.hasMany(Asset, { foreignKey: "createdBy" });
Asset.belongsTo(User, { foreignKey: "createdBy" });