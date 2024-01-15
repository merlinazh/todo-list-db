const mongoose = require('mongoose');
const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).send({ todos });
    } catch (err) {
        res.status(500).send(err);
    }
};

const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = await Todo.create({ title, description });
        res.status(201).send({ message: 'Todo Added Succesfully' });
    } catch (err) {
        res.status(500).send(err);
    }
};

const detailTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await Todo.findById(id);
        res.status(200).send(detail);
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid todo ID' });
        }

        const update = await Todo.findByIdAndUpdate(
            id,
            { title, description, status },
            { new: true }
        );

        if(!update) {
            return res.status(404).json({ error: 'Todo not found' })
        }

        res.status(201).json(update);
    } catch (err) {
        res.status(500).send(err);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid todo ID' });
        }

        const todoDelete = await Todo.findByIdAndDelete(id);

        if (!todoDelete) {
            return res.status(404).send({ error: 'Todo not found' });
        }

        res.status(200).send({ message: 'Todo deleted succesfully' })
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteAllTodos = async (req, res) => {
    try{
        const deleteTodos = await Todo.deleteMany();
        res.status(200).send({ message: 'All todo deleted succesfully' });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getAllTodos,
    addTodo,
    detailTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos
}
