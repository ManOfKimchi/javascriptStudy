const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

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

app.listen(4000, () => {
  console.log('listening to port 4000');
});
