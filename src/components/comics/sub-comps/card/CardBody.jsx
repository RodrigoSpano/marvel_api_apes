/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardBody = ({body}) => {

  const navigate = useNavigate()

  return (
    <div className='card_body'>
      <h3>{body.title}</h3>
      <Button variant='danger' onClick={() => navigate(`/comic/${body.id}`)} className='btn'>View more</Button>
    </div>
  )
}

export default CardBody