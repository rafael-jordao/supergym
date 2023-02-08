import { Request, Response } from "express";
import appDataSource from "../../database/data-source";

import User from "../../models/User";

class UserController {
    index(req: Request, res: Response) {
        return res.send({ userID: req.userId });
    }

    async store(req: Request, res: Response) {
        const repository = appDataSource.getRepository(User);

        const { email, password } = req.body;

        const userExists = await repository.findOne({ where: { email } })

        if (userExists) {
            return res.sendStatus(409)
        }

        const user = repository.create({ email, password });
        await repository.save(user);

        return res.json(user)
    }

}

export default new UserController();