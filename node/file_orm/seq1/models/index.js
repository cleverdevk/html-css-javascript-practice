const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const User = require("./user");
const Comment = require("./comment");
const Orderlist = require("./orderlist");

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config);


db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);
Orderlist.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
