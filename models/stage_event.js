'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stage_event.init({
    stage_event_id: DataTypes.INTEGER,
    stage_id: DataTypes.SMALLINT,
    event_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'stage_event',
  });
  return stage_event;
};