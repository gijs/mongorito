// Generated by CoffeeScript 1.3.1
var Mongorito, Post;

Mongorito = require('../lib/mongorito');

Mongorito.connect(['mongo://127.0.0.1:27017/databaseName']);

Post = (function() {

  Post.name = 'Post';

  function Post() {}

  return Post;

})();

Post = Mongorito.bake(Post);