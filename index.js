'use strict'

const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json())

app.get('/api/product', (req, res) => {
	res.send(200, {products: []})

})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
	console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()
	product.name = req.body.name
	product.picture = requ.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if(err) res.status(500).send({ message: `Error al guardar: ${err}`})

		res.status(200).send({ product: productStored})
	})
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) =>{

})

mongoose.connect('mongodb://127.0.0.1:27017', (err, res) => {
	if (err) {
		return console.log(`Error al conectar a la BD: ${err}`)
		console.log(res)
	}
	console.log('Conexion a la BD establecida...')

	app.listen(port, () => {
	console.log('API REST corriendo en http://localhost:3000/')
	})
})

