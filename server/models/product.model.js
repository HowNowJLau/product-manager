const mongoose = require('mongoose');

const ProductScehma = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {MINLENGTH} characters long"]
    },
    price : {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [0, "{PATH} must be {MIN} or greater"]
    },
    description : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {MINLENGTH} characters long"]
    }
}, {timestamps: true});

const Product = mongoose.model("Model", ProductScehma);

module.exports = Product;