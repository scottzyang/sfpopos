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
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="images"/>
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        { hours !== "" ? <p className="POPOSDetails-hours">{ hours }</p> : <p className="POPOSDetails-hours">Hours Currently Unavailable</p>}
        <POPOSFeatureList features={features}/>
      </div>
    </div>
  )
}

export default POPOSDetails
