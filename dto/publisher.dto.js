
class PublisherDTO {
    constructor( 
        { 
            id,
            name,
            street,
            number,
            city,
            postalCode,
            country,
            website
        } ) {
                this.id = id;
                this.name = name;
                this.street = street ?? null;
                this.number = number ?? null;
                this.city = city ?? null;
                this.postalCode = postalCode ?? null;
                this.country = country ?? null;
                this.website = website ?? null;
            }
}

module.exports = PublisherDTO;