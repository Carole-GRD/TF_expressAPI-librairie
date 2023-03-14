const BookDTO = require("./book.dto");

class AuthorDTO {
    constructor( { id, firstname, lastname, birthdate, biography, photo, Books } ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate ?? null;
        this.biography = biography ?? null;
        this.photo = photo ?? null;

        this.Books = Books ? Books.map(book => new BookDTO(book)) : [];
    }
}

module.exports = AuthorDTO;