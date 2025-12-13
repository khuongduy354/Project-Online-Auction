import { Router } from "express"; 
import { ProductController } from "../controllers/product.controller.js";

const productRouter = Router();  

productRouter.get("/", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);

export { productRouter };