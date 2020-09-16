const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Seller = require('./seller');
const User = require('./user');
const Room = require('./room');
const Option = require('./option');
const Image = require('./image');

const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;

db.Seller = Seller;
db.User = User;
db.Image = Image;
db.Option = Option;
db.Room = Room;

User.init(sequelize);
Seller.init(sequelize);
Room.init(sequelize);
Option.init(sequelize);
Image.init(sequelize);

Seller.associate(db);
User.associate(db);
Room.associate(db);
Option.associate(db);
Image.associate(db);

module.exports = db;
