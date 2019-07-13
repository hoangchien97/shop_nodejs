import * as express from "express";
import { ProductModel } from "../../models";
import { asyncMiddleware } from "../../middlewares";

const productRouter = express.Router();

productRouter.get("/", asyncMiddleware(getProducts));

async function getProducts(req: express.Request, res: express.Response) {
    const products = await ProductModel.findAndCountAll();
    return res.json(products);
}


export { productRouter };