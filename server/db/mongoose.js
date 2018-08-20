const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rex:Miniclip123@ds227322.mlab.com:27322/rexactest' || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports =  {mongoose};
