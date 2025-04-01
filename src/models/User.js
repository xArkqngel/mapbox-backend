import {DataTypes} from 'sequelize'
import { sequelize } from "../database/database.js";

export const User = sequelize.define('User',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  role:{
    type:DataTypes.ENUM('admin','operator'),
    allowNull: false,
    defaultValue: 'operator'
  }
})