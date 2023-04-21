import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.js'
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList'
import './POPOSDetails.css'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, } = data[id]

  return (
    <section className="POPOSDetails">
      <figure className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="location"/>
      </figure>
      <section className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        { hours !== "" ? <p className="POPOSDetails-hours">{ hours }</p> : <p className="POPOSDetails-hours">Hours Currently Unavailable</p>}
        <POPOSFeatureList features={features}/>
      </section>
    </section>
  )
}

export default POPOSDetails
