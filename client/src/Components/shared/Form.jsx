import React from 'react';
import { Link } from 'react-router-dom';

const SubjectForm = ({ subject, handleSubmit, handleChange, cancelPath }) => {
	console.log('SubjectForm', subject);
	const field1 = 'field1';
	const field2 = 'field2';

	return (
		<form onSubmit={handleSubmit}>
			<label>Field1</label>
			<input placeholder={`add a ${field1}`} value={subject.field1} name={`${field1}`} onChange={handleChange} />

			<label>Field2</label>
			<input placeholder={`add a ${field2}`} value={subject.field2} name={`${field2}`} onChange={handleChange} />

			<button type="submit">Submit</button>
			<Link to={cancelPath}>
				<button>Cancel</button>
			</Link>
		</form>
	);
};

export default SubjectForm;
