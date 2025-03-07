const mongoose = require('mongoose')

const libriSchema = new mongoose.Schema({
    autori: { type: String, required: true },
    faqet: { type: Number, required: true }
});

const LibriModel = mongoose.model("Libri", libriSchema); // Use uppercase for the model name

module.exports = LibriModel;