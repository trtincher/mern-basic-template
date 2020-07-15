const mongoose = require('mongoose');

const subject = 'items2';

mongoose.connect(
	`mongodb://localhost:27017/${subject}_db`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	() => console.log('connection established to mongod')
);

mongoose.Promise = Promise;

module.exports = mongoose;
