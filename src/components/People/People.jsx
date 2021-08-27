import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import '../People/people.css'
import axios from 'axios'

const People = ({ dataProp }) => {
  const [ personaje, setPersonaje] = useState ([])
  useEffect (() => {
    axios('https://www.breakingbadapi.com/api/characters')
    .then((res) => setPersonaje (res.data)
    )
  }, [])


  return (
  <Card>
    <Card.Content>
      <h1>People</h1>
      {personaje.map()}
      <Card.Header>{dataProp.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{dataProp.species}Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    
  </Card>
  )
}

export default People