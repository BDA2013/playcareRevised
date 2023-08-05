module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    monday: DataTypes.BOOLEAN,
    tuesday: DataTypes.BOOLEAN,
    wednesday: DataTypes.BOOLEAN,
    thursday: DataTypes.BOOLEAN,
    friday: DataTypes.BOOLEAN
  });
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Child, {
      foreignKey: {allowNull: true,defaultValue:0}
    });
  };

  return Schedule;
};

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
  {
    monday: {
      type: DataTypes.BOOLEAN
    },

    tuesday: {
      type: DataTypes.BOOLEAN
    },
    wednesday: {
      type: DataTypes.BOOLEAN
    },
    thursday: {
      type: DataTypes.BOOLEAN
      },

    friday: {
      type: DataTypes.BOOLEAN
      }
    },

    Schedule.associate = function(models) {
      Schedule.belongsTo(models.Child, {
        foreignKey: {allowNull: true, defaultValue:0}
      });
    }
);

module.exports = Child;