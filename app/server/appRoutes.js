const jsonAPi = {
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
  ws: true,
  secure: false,
  pathRewrite(path, req) {
    return path.replace('/api/posts', '/posts');
  },
};

exports.jsonAPi =jsonAPi;
