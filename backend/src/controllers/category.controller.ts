import type { Request, Response } from "express";
import { exampleModel } from "../models/example.model.js"; 
import { CategoryService } from "../services/category.service.js";


export const CategoryController = {
    getAll: async (req: Request, res: Response) => {
        const categories = CategoryService.getAll();
        return res.status(200).json(categories);
    },

    getProductsById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const products = CategoryService.getProductsById(id);
        return res.status(200).json(products);
    }
}