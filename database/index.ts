const { Client } = require('ts-postgres');
const { host, user, password } = require('../config');

const client = new Client({
  user: user,
  host: host,
  database: 'pressfeed',
  password: password,
  port: 5432
});

client
  .connect()
  .then(() => {
    console.log('connected to pressfeed database');
  })
  .catch((err: Error) => {
    console.log('error: ', err);
  });

export default client;