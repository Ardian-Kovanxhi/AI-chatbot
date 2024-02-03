'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

// {
//   posterId: DataTypes.INTEGER,
//   genre: DataTypes.STRING,
//   title: DataTypes.STRING,
//   content: DataTypes.STRING
// }

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Posts';
    return queryInterface.bulkInsert(options, [
      {
        posterId: 1,
        genre: 'place_holder_genre_1',
        title: 'my tv broke',
        content: 'AHHHHHHHH DOOR STUCK'
      },
      {
        posterId: 2,
        genre: 'place_holder_genre_2',
        title: 'my tv broke',
        content: 'AHHHHHHHH DOOR STUCK'
      },
      {
        posterId: 3,
        genre: 'place_holder_genre_3',
        title: 'my tv broke',
        content: 'AHHHHHHHH DOOR STUCK'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Posts';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      content: { [Op.in]: ['AHHHHHHHH DOOR STUCK'] }
    }, {});
  }
};
