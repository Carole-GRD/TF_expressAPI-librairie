const { Request, Response } = require('express');


const formatController = {
    /** 
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
     getAll : (req, res) => {
        res.sendStatus(501);   
    },

    /** 
     * Get By Id
     * @param { Request } req
     * @param { Response } res
     */
    getById : (req, res) => {
        res.sendStatus(501);
    },

    /** 
     * Get By Book
     * @param { Request } req
     * @param { Response } res
     */
     getByBook : (req, res) => {
        res.sendStatus(501);
    },

    /** 
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : (req, res) => {
        res.sendStatus(501);
    },

    /** 
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : (req, res) => {
        res.sendStatus(501);
    },

    /** 
     * Delete
     * @param { Request } req
     * @param { Response } res
     */
    delete : (req, res) => {
        res.sendStatus(501);
    }
}

module.exports = formatController;