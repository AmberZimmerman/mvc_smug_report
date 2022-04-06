const User = require('./User');
const Bp = require('./Bp');

User.hasMany(Bp, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bp.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bp };
