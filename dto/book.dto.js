const AuthorBookDTO = require("./author.book.dto");
const FormatDTO = require("./format.dto");


class BookDTO {
    constructor( 
        { 
            id, 
            ISBN, 
            title, 
            description, 
            publication_date, 
            cover,
            Publisher,
            Genre,
            
            Formats,
            Authors 
        } ) {
                this.id = id;
                this.ISBN = ISBN;
                this.title = title;
                this.description = description;
                this.publication_date = publication_date;
                this.cover = cover ?? null;

                this.Publisher = Publisher;
                this.Genre = Genre;
                // console.log(Authors);
                Authors.forEach(author => console.log(author))
                this.Formats = Formats ? Formats.map(format => new FormatDTO(format)) : [];
                this.Authors = Authors ? Authors.map(author => new AuthorBookDTO(author)) : [];
            }
}

module.exports = BookDTO;