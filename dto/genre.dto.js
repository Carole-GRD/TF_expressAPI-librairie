
class GenreDTO {
     constructor( { id, name, Books } ) {
        this.id = id;
        this.name = name;

        this.Books = Books ? Books.map(book => new BookDTO(book)) : [];
     }
}

module.exports = GenreDTO;