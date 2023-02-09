import request from 'supertest';
import app from '../app'

describe('User', () => {
    it('Should be able to create a new User. Route: /users', async () => {
        const payload = {
            "email": "user@testes3.com",
            "password": "password"
        }
        try {
            const res = await request(app)
                .post('http://localhost:3000/users')
                .send(payload)

            expect(res.status).toBe(200)
            expect(res.body).toEqual(
                expect.objectContaining({
                    email: "user@testes3.com",
                    password: expect.any(String),
                    id: expect.any(String)
                })
            )
        } catch (err) {
            console.log(err)
            expect(err)
        }
    })

})

describe('User', () => {
    it('Should NOT be able to create a new User with invalid data. Route: /users', async () => {
        const invalidPayload = {
            "email": "user@testes3.com", // invalid email
            "password": "password"
        }
        try {
            const res = await request(app)
                .post('http://localhost:3000/users')
                .send(invalidPayload)

            expect(res.status).toBe(409)
        } catch (err) {
            console.log(err)
            expect(err)
        }
    })
})
