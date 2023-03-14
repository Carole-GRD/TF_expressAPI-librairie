// const BookDTO = require("./book.dto");

class FormatDTO {
    constructor( { id, name, MM_Format_Book } ) {
        this.id = id;
        this.name = name;
        this.price = MM_Format_Book.price ? MM_Format_Book.price : null;
        this.quantity = MM_Format_Book.quantity ? MM_Format_Book.quantity : null;
    }
}
// ATTENTION aux boucle infinie si besoin à un moment du BookDTO
// format -> book -> fomrat -> ...

module.exports = FormatDTO;