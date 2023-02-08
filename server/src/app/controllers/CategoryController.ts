import { Request, Response } from "express";
import appDataSource from "../../database/data-source";

import Category from '../../models/Category';

class CategoryController {
    async store(req: Request, res: Response) {
        const repository = appDataSource.getRepository(Category);

        const { icon, category } = req.body;

        const categoryExists = await repository.findOne({ where: { category } })

        if (categoryExists) return res.sendStatus(409)

        const newCategory = repository.create({ icon, category });
        await repository.save(newCategory);

        return res.json(newCategory);
    }

}

export default new CategoryController();