const request = require('supertest');
const app = require('./app'); // Adjust the path if necessary

describe('GraphQL Server', () => {
  it('GraphQL Server Started And Running', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            __schema {
              queryType {
                name
              }
            }
          }
        `
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.__schema.queryType.name).toBe('Query');
  });
});
