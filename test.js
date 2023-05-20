import connection from './database/useDatabase.js'
import User from './server/models/User.js';
import Post from './server/models/Post.js';

console.log(await Post.truncate())

connection.end();