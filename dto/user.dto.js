const OrderDTO = require("./order.dto");

class UserDTO {
    constructor( 
        { 
            id, 
            firstname,
            lastname,
            pseudo,
            email,
            role,
            avatar,
            Orders
        } ) {
                this.id = id;
                this.firstname = firstname;
                this.lastname = lastname;
                this.pseudo = pseudo ?? null;
                this.email = email;
                this.role = role;
                this.avatar = avatar ?? null;

                this.Orders = Orders ? Orders.map(order => new OrderDTO(order)) : [];
            }
}

module.exports = UserDTO;