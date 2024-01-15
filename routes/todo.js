const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');

router.get('/todos', todoController.getAllTodos);
router.post('/add-todo', todoController.addTodo);
router.get('/detail-todo/:id', todoController.detailTodo)
router.put('/update-todo/:id', todoController.updateTodo);
router.delete('/delete-todo/:id', todoController.deleteTodo);
router.delete('/delete-all', todoController.deleteAllTodos);

module.exports = router;
