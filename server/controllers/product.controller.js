const Product = require('../models/product.model');

module.exports.create = (req, res) => {
    Product.create(req.body)
    .then(newProduct => {
        return res.json(newProduct);
    }).catch(err => {
        return res.status(400).json(err);
    })
}

module.exports.getAll = (req, res) => {
    Product.find({})
    .then(allProducts => {
        return res.json(allProducts);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getOne = (req, res) => {
    Product.findById({_id : req.params.id})
    .then (product => {
        return res.json(product);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.deleteOne = (req, res) => {
    Product.deleteOne({_id : req.params.id})
    .then (deletedProduct => {
        return res.json(deletedProduct);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.updateOne = (req, res) => {
    Product.updateOne({_id : req.params.id}, req.body, {runValidators: true})
    .then (updatedProduct => {
        return res.json(updatedProduct);
    }).catch(err => {
        return res.json(err);
    })
}