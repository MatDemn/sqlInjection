import { RequestHandler } from "express";
import { pool } from "../lib/db";

/*
This is just a test query function, do not use it outside of dev env.
It defeats the whole purpose of this exercise.
*/
export const getAllProducts: RequestHandler = async (req,res,next) => {
    try {
        const results = (await pool.query(
            'SELECT * FROM `Products` WHERE `isHidden`=0'
        ))[0];
        console.log(results);
        res.render('products', {products: results});
    } catch (error) {
        next(error);
    }
}

export const getProducts: RequestHandler = async (req,res,next) => {
    try {
        const nameParam = req.body.nameParam;
        const results = (await pool.query(
            'SELECT * FROM `Products` WHERE `isHidden`= 0 AND `name` LIKE \'%'+nameParam+'\'%'
        ))[0];
        res.render('products', {products: results});
    } catch (error) {
        next(error);
    }
}