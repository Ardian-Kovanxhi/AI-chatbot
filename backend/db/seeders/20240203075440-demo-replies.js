'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

// {
//   posterId: DataTypes.INTEGER,
//   postId: DataTypes.INTEGER,
//   replyId: DataTypes.INTEGER,
//   content: DataTypes.STRING
// }

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Replies';
    return queryInterface.bulkInsert(options, [
      {
        posterId: 3,
        postId: 1,
        replyId: null,
        content: 'AHHHHHHHH DOOR STUCK'
      },
      {
        posterId: 3,
        postId: 1,
        replyId: 1,
        content: 'AHHHHHHHH DOOR STUCK'
      },
      {
        posterId: 3,
        postId: 2,
        replyId: null,
        content: 'AHHHHHHHH DOOR STUCK'
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Replies';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      content: { [Op.in]: ['AHHHHHHHH DOOR STUCK'] }
    }, {});
  }
};
