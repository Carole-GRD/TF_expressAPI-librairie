const { Sequelize } = require('sequelize');

const { DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;


// Initialisation Sequelize
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mssql'
})

// Création de l'objet db
const db = {};
// Ajout de l'instance sequelize créée précédemment sur l'objet db
db.sequelize = sequelize;


// Liaison modèles <--> db
db.Author = require('./author.model')(sequelize);
db.Book = require('./book.model')(sequelize);
db.Format = require('./format.model')(sequelize);
db.MM_Format_Book = require('./mm_format_book.model')(sequelize);
db.Genre = require('./genre.model')(sequelize);
db.Order = require('./order.model')(sequelize);
db.Publisher = require('./publisher.model')(sequelize);
db.User = require('./user.model')(sequelize);


// Définition des relations
// Book <-> Genre (One to Many)
db.Genre.hasMany(db.Book);
db.Book.belongsTo(db.Genre);
// Book <-> Publisher (One to Many)
db.Publisher.hasMany(db.Book);
db.Book.belongsTo(db.Publisher);
// User <-> Order (One to Many)
db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);
// Book <-> Author (Many to Many)
db.Book.belongsToMany(db.Author, { through : 'MM_Author_Book' });
db.Author.belongsToMany(db.Book, { through : 'MM_Author_Book' });
// Book <-> Order (Many to Many)
db.Book.belongsToMany(db.Order, { through : 'MM_Order_Book' });
db.Order.belongsToMany(db.Book, { through : 'MM_Order_Book' });
// Book <-> Format (Many to Many avec attributs)
db.Book.belongsToMany(db.Format, { through : db.MM_Format_Book });
db.Format.belongsToMany(db.Book, { through : db.MM_Format_Book });


// export de db
module.exports = db;
