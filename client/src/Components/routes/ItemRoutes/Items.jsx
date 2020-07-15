import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Subject = (props) => {
  const [subject, setSubject] = useState([])
  const subjectText = 'items';
 
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:4000/api/${subjectText}`)
        console.log(response)
        setSubject(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    makeAPICall()
  }, [])


 const subjectArr = subject.map( item => {
        console.log('items item', item)
        
        return (<li key={item._id}>
            <Link to={`/${subjectText}/${item.field1}`}>{item.field1}</Link>
        </li>)
    }
  )
   
    return (
      <>
        <h4>{`${subjectText}`}</h4>
        <ul>
          {subjectArr}
        </ul>
      </>
    )
}

export default Subject