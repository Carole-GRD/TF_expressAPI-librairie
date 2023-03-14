const AuthorDTO = require("./author.dto");
const FormatDTO = require("./format.dto");
const OrderDTO = require("./order.dto");

class BookDTO {
    constructor( 
        { 
            id, 
            ISBN, 
            title, 
            description, 
            publication_date, 
            cover,
            Orders,
            Formats,
            Authors 
        } ) {
                this.id = id;
                this.ISBN = ISBN;
                this.title = title;
                this.description = description;
                this.publication_date = publication_date;
                this.cover = cover ?? null;

                this.Orders = Orders ? Orders.map(order => new OrderDTO(order)) : [];
                this.Formats = Formats ? Formats.map(format => new FormatDTO(format)) : [];
                this.Authors = Authors ? Authors.map(author => new AuthorDTO(author)) : [];
            }
}

module.exports = BookDTO;