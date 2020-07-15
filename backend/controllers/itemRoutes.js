const express = require('express');
const router = express.Router();
// Require the Cookbook controller.
const Item = require('../models/Item');

const field1 = 'field1';
const field2 = 'field2';

// Write the route to list all items//index
router.get('/', (req, res) => {
	Item.find({}, (err, items) => {
		if (err) console.log(err);
		else res.send(items);
	});
});

// Write the route to get item by field1//show
router.get(`/${field1}/:id`, (req, res) => {
	Item.find({ field1: req.params.id }, (err, item) => {
		if (err) console.log(err);
		else res.send(item);
	});
});

// Write the route to get item by year field2//show
router.get(`/${field2}/:id`, (req, res) => {
	Item.find({ field2: req.params.id }, (err, item) => {
		if (err) console.log(err);
		else res.send(item);
	});
});

// Write the route to create a item//create
router.post('/', (req, res) => {
	Item.create(req.body, (err, item) => {
		if (err) console.log(err);
		else res.send(item);
	});
});

// Write the route to update a item//update
router.put('/:id', (req, res) => {
	Item.findOneAndUpdate({ field1: req.params.id }, req.body, { new: true }, (err, updated) => {
		if (err) console.log(err);
		else res.send(updated);
	});
});

// Write the route to delete the item by field1//delete
router.delete('/:id', (req, res) => {
	Item.deleteOne({ field1: req.params.id }, (err, deleted) => {
		if (err) console.log(err);
		else res.send(deleted);
	});
});

module.exports = router;
