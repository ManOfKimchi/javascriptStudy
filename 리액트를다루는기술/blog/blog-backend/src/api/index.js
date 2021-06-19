import Router from 'koa-router';
import posts from './posts';

const api = new Router();

// api.get('/test', (ctx) => {
//   ctx.body = 'test success';
// });
api.use('/posts', posts.routes());

export default api;
