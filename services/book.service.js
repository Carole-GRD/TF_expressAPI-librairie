const BookDTO = require("../dto/book.dto");
const { Publisher, Genre, Order, Format, Author, Book } = require("../models");
const db = require("../models");

const bookService = {
    
    getAll : async () => {
        const { rows, count } = await db.Book.findAndCountAll({
            distinct : true,
            include : [ Genre, Order, Format, Author ]
        });
        return {
            books : rows.map(book => new BookDTO(book)),
            count
        }
    },

    getById : async (id) => {
        const book = await db.Book.findByPk(id);
        return book ? new BookDTO(book) : null;
    },

    getByAuthor : (author) => {

    },

    getByGenre : (genre) => {

    },

    create : async (bookToAdd) => {

        const transaction = await db.sequelize.transaction();

        try {
            // Pour rajouter le publisher à la track, il suffit de rajouter dans le body PublisherId: value
            // Pour rajouter le genre à la track, il suffit de rajouter dans le body GenreId: value
            const book = await db.Book.create(bookToAdd);

            for (const format of bookToAdd.formats) {
                await book.addFormats(format.id, { through : { price : format.price } }, { through : { quantity : format.quantity } }, transaction );
            }

            await book.addAuthors(bookToAdd.authors, { transaction });

            await transaction.commit();

            const addedBook = await db.Book.findByPk(book.id, {
                include: [ Publisher, Genre, Author ]
            })

            return addedBook ? new BookDTO(addedBook) : null;

        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    },

    update : async(id, bookToUpdate) => {
        const updatedRow = await db.Book.update(bookToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    delete : (id) => {

    }

}

module.exports = bookService;