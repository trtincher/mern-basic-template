import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import SubjectForm from '../../shared/Form';

const SubjectEdit = (props) => {
	console.log('SubjectEdit - props', props);
	const [ subject, setSubject ] = useState({ title: '', yearPublished: '' });
    const [ isUpdated, setIsUpdated ] = useState(false);
    const subjectText = 'item';

	useEffect(() => {
		const makeAPICall = async () => {
			try {
				const response = await axios(`http://localhost:4000/api/${subjectText}s/title/${props.match.params.id}`);
				setSubject({
					subject: response.data[0]
				});
			} catch (err) {
				console.error(err);
			}
		};
		makeAPICall();
	}, []);

	const handleChange = (event) => {
		setSubject({
			...subject,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/api/${subjectText}s/${props.match.params.id}`,
			method: 'PUT',
			data: subject
		})
			.then(() => setIsUpdated(true))
			.catch(console.error);
	};

	if (isUpdated) {
		return <Redirect to={`/${subjectText}s`} />;
	}

	return (
		<>
			<SubjectForm
				subject={subject}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				cancelPath={`/${subjectText}s/${props.match.params.id}`}
			/>
		</>
	);
};

export default SubjectEdit;
