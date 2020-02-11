const request = require('request');

const options = {
  url: 'http://localhost:3000/users',
  method: 'POST',
  params: {
    username: "Teste unit",
    email: "teste@itau.com.br"
  },
  headers: {
    'Accept': 'application/json',
  }
};

describe("User", () => {
  it("should create user and email", () => {
    return new Promise(function (resolve, reject) {
      request('http://localhost:3000/users', function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          resolve(body);
          expect(JSON.parse(body).status).toBe(200);
        }
      })

    })

  });
});