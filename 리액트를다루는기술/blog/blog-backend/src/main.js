require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import api from './api';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

const { PORT, MONGO_URI } = process.env;
const app = new Koa();
const router = new Router();

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });
router.use('/api', api.routes());

// router.get('/', (ctx) => {
//   ctx.body = 'home';
// });
// // param
// router.get('/about/:name?', (ctx) => {
//   const { name } = ctx.params;
//   ctx.body = name ? `about ${name}` : 'introduce';
// });
// // query
// router.get('/posts', (ctx) => {
//   const { id } = ctx.query;
//   ctx.body = id ? `post #${id}` : 'post id is null';
// });

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('listening to port 4000');
});
