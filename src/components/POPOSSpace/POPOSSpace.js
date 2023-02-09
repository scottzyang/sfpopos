import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace({ name, image, address, hours, id }) {
  return(
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="50 California St." />
      </Link>
      <div>{address}</div>
      <div className='hours'>{hours}</div>
    </div>
  )
}

export default POPOSSpace
