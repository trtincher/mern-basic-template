import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


const Subject = (props) =>  {
    console.log(props)
  const [subject,setSubject] = useState(null)
  const [isDeleted,setIsDeleted] = useState(false)
  const subjectText = 'item';
  const field1 = 'field1'
  const field2 = 'field2'

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`http://localhost:4000/api/${subjectText}s/${field1}/${props.match.params.id}`)
          console.log(`${subjectText} - response`, response)
          setSubject(response.data[0])
        } catch (err) {
          console.error(err)
        }
  
   }
  makeAPICall()
  }, [])

  const destroy = async () => {
    const response = await axios({
      url: `http://localhost:4000/api/${subjectText}s/${props.match.params.id}`,
      method: 'DELETE'
    })
    setIsDeleted(true)
  }

    if (!subject) {
      return <p>Loading...</p>
    }

    if (isDeleted) {
      return <Redirect to={
        { pathname: `/${subjectText}s`, state: { msg: `${subject} succesfully deleted!` } }
      } />
    }

    return (
      <>
        <h4>{subject.field1}</h4>
        <p>{`${field2}`}: {subject.field2}</p>
        <button onClick={destroy}>Delete {`${subjectText}`}</button>
        <Link to={`/${subjectText}s/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/${subjectText}s`}>Back to all {`${subjectText}s`}</Link>
      </>
    )
}

export default Subject