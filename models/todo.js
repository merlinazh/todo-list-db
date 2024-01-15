const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    status: { type: String, default: 'Incomplete' },
}, {
    timestamps: true,
    collection: 'todo'
})

todoSchema.statics.deleteAll = async function () {
    return await this.deleteMany({});
};

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo