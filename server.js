const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./todo');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://byaswanth2003:cfbWdysG5bwzoGwP@cluster0.ff3zuqs.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.post('/api/todo', (req, res) => {
  const { title, description } = req.body;

  const todo = new Todo({ title, description });

  todo.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating a To-Do item' });
    });
});

app.get('/api/todo', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error getting To-Do items' });
    });
});

app.get('/api/todo/:id', (req, res) => {
  const { id } = req.params;

  Todo.findById(id)
    .then((todo) => {
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ error: 'To-Do item not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error getting the To-Do item' });
    });
});

app.put('/api/todo/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  Todo.findByIdAndUpdate(id, { title, description, status }, { new: true })
    .then((todo) => {
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ error: 'To-Do item not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating the To-Do item' });
    });
});

app.delete('/api/todo/:id', (req, res) => {
  const { id } = req.params;

  Todo.findByIdAndRemove(id)
    .then((todo) => {
      if (todo) {
        res.json({ message: 'To-Do item deleted successfully' });
      } else {
        res.status(404).json({ error: 'To-Do item not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting the To-Do item' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
