import express, { NextFunction, Request, Response } from "express";
import {router as productsRouter} from "./routers/products";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.use("/products", productsRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error ocurred!";
  let statusCode = 500;
  res.status(statusCode).json({error: errorMessage});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});