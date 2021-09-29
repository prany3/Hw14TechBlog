const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// // });

// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Comment, Blog };
