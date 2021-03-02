module.exports = {
	port: process.env.PORT || 3001,
	//db: process.env.MONGODB || 'mongodb://127.0.0.1:27017/shop',
	db: process.env.MONGODB || 'mongodb+srv://shop:shop2020@cluster0-azvgh.mongodb.net/shop?retryWrites=true&w=majority',
	SECRET_TOKEN: 'miclavetokens'
};