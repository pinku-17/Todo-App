import chai from 'chai';
const expect = chai.expect;
import app from '../app';
const request = require('supertest')(app);

describe('Todo API', () => {
  // Test for getting all todos
  it('should get all todos', async () => {
    const res = await request.get('/api/todos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  // Test for creating a new todo
  it('should create a new todo', async () => {
    const newTodo = { title: 'Test Todo', completed: false };
    const res = await request.post('/api/todos').send(newTodo);
    expect(res.status).to.equal(201);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('id');
    expect(res.body.title).to.equal(newTodo.title);
    expect(res.body.completed).to.equal(newTodo.completed);
  });

  // Test for updating an existing todo
  it('should update an existing todo', async () => {
    const todoToUpdate = { title: 'Updated Todo', completed: true };
    const res = await request.put('/api/todos/1').send(todoToUpdate); // Assuming you have a todo with ID 1
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.title).to.equal(todoToUpdate.title);
    expect(res.body.completed).to.equal(todoToUpdate.completed);
  });

  // Test for deleting a todo
  it('should delete a todo', async () => {
    const res = await request.delete('/api/todos/1'); // Assuming you have a todo with ID 1
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    // Assuming you return a response with a 'message' property after deleting
    expect(res.body).to.have.property('message');
  });
});
