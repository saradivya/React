const express = require('express');
const path = require('path');
const appRoutes = require('./appRoutes');
const proxy = require('http-proxy-middleware');
const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const redis = require('redis');
// const client = redis.createClient('6379', '127.0.0.1', {});

const app = express();

// app.use(session({
//   secret: 'keyboard cat',
//   store: new RedisStore({ client: client }),
// }));

// client.on('error', console.error);
// client.on('connect', () => {
//   console.log('Redis client connected');
// });
app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});


app.use(proxy(['/api/posts'], appRoutes.jsonAPi));


app.listen(7400, error => {
  if (error) {
    console.error(error);
  }
  console.info(
    '==> 🌎 App Listening on 7400 please open your browser and navigate to http://localhost:7400/',
  );
});
