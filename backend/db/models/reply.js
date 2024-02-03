'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.belongsTo(models.User, { foreignKey: 'posterId', onDelete: 'CASCADE' })
    }
  }
  Reply.init({
    posterId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    replyId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};