
class OrderDTO {
    constructor( 
        {   
            id, 
            status, 
            total, 
            delivery_street,
            delivery_number,
            delivery_city,
            delivery_postalCode,
            delivery_country,
            payment_method,
            payment_status,
            delivery_status
        } ) {
                this.id = id;
                this.status = status;
                this.total = total;
                this.delivery_street = delivery_street;
                this.delivery_number = delivery_number;
                this.delivery_city = delivery_city;
                this.delivery_postalCode = delivery_postalCode;
                this.delivery_country = delivery_country;
                this.payment_method = payment_method;
                this.payment_status = payment_status;
                this.delivery_status = delivery_status;
            }
}
module.exports = OrderDTO;