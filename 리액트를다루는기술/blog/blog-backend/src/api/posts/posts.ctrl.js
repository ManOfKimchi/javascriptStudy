const { post } = require('.');

let postId = 1;

const posts = [
  {
    id: 1,
    title: 'title',
    body: 'content',
  },
  {
    id: 2,
    title: 'hihihihihi',
    body: 'bodybodybodybody',
  },
];

// post
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

// get
exports.list = (ctx) => {
  ctx.body = posts;
};
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: 'post not found',
    };
    return;
  }

  ctx.body = post;
};

// delete
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'post not found',
    };
    return;
  }

  post.splice(index, 1);
  ctx.status = 204;
};

// put
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'post not found',
    };
    return;
  }

  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

// patch
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'post not found',
    };
    return;
  }

  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
