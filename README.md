# Todo App

This is a simple RESTful API for managing todo items. It allows users to create, retrieve, update, and delete todo items. The API is built using Node.js, Express.js, and MongoDB with the help of Mongoose.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Install the dependencies:

   ```bash
   cd todo-app
   npm install
   ```

3. Set up the MongoDB connection:
   - Create a MongoDB Atlas account or use an existing MongoDB database.
   - Obtain the connection URI.
   - Replace the connection URI in the `mongoose.connect` function call in `index.js` with your own connection URI.

4. Run the application:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## API Endpoints

- **POST /api/todo**: Create a new todo item.
- **GET /api/todo**: Retrieve all todo items.
- **GET /api/todo/:id**: Retrieve a specific todo item by ID.
- **PUT /api/todo/:id**: Update a specific todo item by ID.
- **DELETE /api/todo/:id**: Delete a specific todo item by ID.

## Usage

You can use a tool like [Postman](https://www.postman.com/downloads/) to interact with the API and perform CRUD operations on todo items.

### Create a Todo Item

Send a POST request to `/api/todo` with the following JSON payload:

```json
{
  "title": "Finish project",
  "description": "Complete the remaining tasks for the project"
}
```

### Retrieve All Todo Items

Send a GET request to `/api/todo` to retrieve all the todo items.

### Retrieve a Todo Item

Send a GET request to `/api/todo/:id`, replacing `:id` with the ID of the todo item you want to retrieve.

### Update a Todo Item

Send a PUT request to `/api/todo/:id`, replacing `:id` with the ID of the todo item you want to update. Include the following JSON payload with the updated data:

```json
{
  "title": "New title",
  "description": "New description",
  "status": "completed"
}
```

### Delete a Todo Item

Send a DELETE request to `/api/todo/:id`, replacing `:id` with the ID of the todo item you want to delete.

## Acknowledgment

This project was developed as a practice exercise for Node.js. It serves as a learning tool to understand and implement basic CRUD operations using Node.js, Express.js, and MongoDB with Mongoose. This exercise allowed for gaining hands-on experience in building a RESTful API and understanding how different components work together to create a functional application.
