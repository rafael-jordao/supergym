import { Request, Response } from "express";
import appDataSource from "../../database/data-source";
import jwt from 'jsonwebtoken';

let bcrypt = require('bcryptjs');

import User from "../../models/User";

class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = appDataSource.getRepository(User);

        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } })

        if (!user) return res.sendStatus(401);

        const isValidPassword = bcrypt.compare(password, user.password);

        if (!isValidPassword) return res.sendStatus(401);

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

        const user_email = user.email
        const user_id = user.id

        return res.json({
            user_id,
            user_email,
            token
        })

    }

}

export default new AuthController();