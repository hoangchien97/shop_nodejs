import * as express from "express";
import { productRouter } from "./products/product";

const apiRouter = express.Router();


apiRouter.use("/products", productRouter);

export { apiRouter };