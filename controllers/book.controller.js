const { Request, Response } = require('express');
const bookService = require('../services/book.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');


const bookController = {
    /** 
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
     getAll : async (req, res) => {
        const { books, count } = await bookService.getAll();
        res.status(200).json(new SuccessArrayResponse(books, count));
    },

    /** 
     * Get By Id
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const book = await bookService.getById(id);
        if (!book) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(book));
    },

    /** 
     * Get By Author
     * @param { Request } req
     * @param { Response } res
     */
     getByAuthor : (req, res) => {
        res.sendStatus(501);
    },

    /** 
     * Get By Genre
     * @param { Request } req
     * @param { Response } res
     */
     getByGenre : (req, res) => {
        res.sendStatus(501);
    },

    /** 
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {
        const data = req.body;
        const book = await bookService.create(data);
        res.location('/book/' + book.id);
        res.status(201).json(new SuccessResponse(book, 201));
    },

    /** 
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await bookService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
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

module.exports = bookController;