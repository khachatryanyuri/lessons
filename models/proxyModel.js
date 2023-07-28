import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Proxy = sequelize.define('Proxy', {
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  port: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export { Proxy };
