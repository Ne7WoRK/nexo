const http = require('http');
const { Pool } = require('pg');

const hostname = '0.0.0.0';
const port = 80;

const pool = new Pool({
  user: 'nexo',
  host: 'database',
  database: 'nexodb',
  password: 'password',
  port: 5432
});

const server = http.createServer(async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const users = result.rows;
    client.release();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    users.forEach(user => {
      res.write(`Username: ${user.username}\n`);
      res.write(`Email: ${user.email}\n`);
      res.write(`Mobile: ${user.phone}\n`);
      res.write('\n');
    });
    res.end();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});