'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	name: String,
	picture: String,
	price: { type: Number, default: 0 },
	category: { type: String, enum: ['homme', 'femme', 'enfant', 'accessoire'], default: '' },
	description: String,
	stock: { type: Number, default: 0 }
}, { collection: 'Product' } );

module.exports = mongoose.model('Product', ProductSchema);