


class AuthorBookDTO {
    constructor( { id, firstname, lastname, birthdate, biography, photo } ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate ?? null;
        this.biography = biography ?? null;
        this.photo = photo ?? null;
    }
}

module.exports = AuthorBookDTO;