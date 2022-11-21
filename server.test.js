// const request = require('supertest');
// const app = require('./routes/User');
// const mongoose = require('mongoose');

// describe ('Test the root path', () => {
//     test('It should response the GET method', () => {
//         const response = request(app).post("http://localhost:3001/users/add").send({
//             Name: "Test",
//             Email: "Test",
//             Age: 20,
//             Contact: 1234567890
//     })
//     expect(response.statusCode).toBe(200);
//     });
// });

const request = require('jest');
const app = require('./routes/User');
const mongoose = require('mongoose');


test.todo('It should response the GET method'), () => {
        const response = request(app).post("http://localhost:3001/users/add").json({
            Name: "Test",
            Email: "Test",
            Age: 20,
            Contact: 1234567890
    })
    expect(response.statusCode).toBe(200);
};