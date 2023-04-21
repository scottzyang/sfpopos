import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace({ name, image, address, hours, id }) {
  return(
    <section className='POPOSSpace'>
      <Link to={`/details/${id}`} className="POPOSSpace-title" role="link" aria-label="Location Details Page">
        <h1>{name}</h1>
      </Link>
      <Link to={`/details/${id}`}  role="link" aria-label="Location Details Page">
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} />
      </Link>
      <section className='POPOSSpace-info'>
        <section>{address}</section>
        <section className='hours'>{hours}</section>
      </section>
      <section className='POPOSSpace-info-phone'>
        <Link to={`/details/${id}`} className="POPOSSpace-phone-link" role="link" aria-label="Location Details Page">
          <p>View Hours</p>
        </Link>
      </section>
    </section>
  )
}

export default POPOSSpace
