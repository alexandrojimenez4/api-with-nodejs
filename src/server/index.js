'use strict'

const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
const port = process.env.PORT || 3000

const ProductCtrl = require('./controllers/product')

// 
app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json())

app.use(express.static('public'))

app.get('/api/product', ProductCtrl.getProducts)
app.get('/api/product/:productId', ProductCtrl.getProduct)
app.post('/api/product', ProductCtrl.saveProduct)
app.put('/api/product/:productId', ProductCtrl.updateProduct)
app.delete('/api/product/:productId', ProductCtrl.deleteProduct)


// Conexion de la conexion con la BD
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
