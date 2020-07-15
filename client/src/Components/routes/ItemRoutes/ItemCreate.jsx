import React, { useState } from 'react';
import axios from 'axios';

import SubjectForm from '../../shared/Form';

const SubjectCreate = (props) => {
	console.log('SubjectCreate props', props);
	const [ input, setInput ] = useState({ title: '', link: '' });
	const [ subject, setSubject ] = useState(null);
	const subjectText = 'item';

	const handleChange = (event) => {
		console.log('event', event.target.name, event.target.value);
		setInput({
			...input,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('handleSubmit');
		axios({
			url: `http://localhost:4000/api/${subjectText}s`,
			method: 'POST',
			data: input
		})
			.then((res) => {
				let field = `created${subjectText}`;
				let value = `res.data${subjectText}`;
				setSubject({ field: value });
				props.history.push(`/${subjectText}s`);
			})
			.catch(console.error);
	};

	return <SubjectForm subject={input} handleChange={handleChange} handleSubmit={handleSubmit} cancelPath="/" />;
};

export default SubjectCreate;
