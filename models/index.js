const User = require('./User');
const Blogp = require('./Blogp');

User.hasMany(Blogp, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogp.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogp };
