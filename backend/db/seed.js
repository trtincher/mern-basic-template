const mongoose = require('./connection.js');
const db = mongoose.connection;
const Item = require('../models/Item');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	await Item.deleteMany({});

	const items = [
		{
			field1: 'Avondale Brewing Co',
			field2: 'Birmingham'
		},
		{
			field1: 'Trim Tab Brewing',
			field2: 'Birmingham'
		},
		{
			field1: 'Yellowhammer Brewery',
			field2: 'Huntsville'
		},
		{
			field1: 'Bearpaw River Brewing Co',
			field2: 'Wasilla'
		}
	];

	await Item.insertMany(items);
	console.log('Created some items!');
};
const run = async () => {
	await main();
	db.close();
};

run();
