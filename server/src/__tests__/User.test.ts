import request from 'supertest';
import appDataSource from '../database/data-source';
import app from '../app'

beforeAll(async () => {
    return appDataSource.initialize()
        .then(() => {
            console.log('Conexão com Postgres feita com sucesso 📦');
            app.listen(3000, () => {
                console.log('Servidor rodando em http://localhost:3000 🚀')
            })

        })
        .catch((err) => {
            console.log('Conexão com banco falhou. Confira o erro: ', err);
        })

})

afterAll(() => {
    return appDataSource.destroy()
})

describe('User', () => {
    it('Should be able to create a new User. Route: /users', async () => {
        const payload = {
            "email": "rafael@ultimoteste2234324.com",
            "password": "password"
        }
        try {
            const res = await request(app)
                .post('/users')
                .send(payload)

            expect(res.status).toBe(200)
            expect(res.body).toEqual(
                expect.objectContaining({
                    email: "rafael@ultimoteste2.com",
                    password: expect.any(String),
                    id: expect.any(String)
                })
            )
        } catch (err) {
            console.log(err)
            expect(err).toBeFalsy()
        }
    })

})

describe('User', () => {
    it('Should NOT be able to create a new User with invalid data. Route: /users', async () => {
        const invalidPayload = {
            "email": "rafael@ultimoteste2234324.com", // invalid email
            "password": "password"
        }
        try {
            const res = await request(app)
                .post('/users')
                .send(invalidPayload)

            expect(res.status).toBe(409)
        } catch (err) {
            console.log(err)
            expect(err).toBeFalsy()
        }
    })
})
