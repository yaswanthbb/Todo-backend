const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['not completed', 'completed'],
    default: 'not completed',
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
