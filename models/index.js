const User = require('./User');
const Article = require('./Article');

User.hasMany(Article, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Article.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Article };
