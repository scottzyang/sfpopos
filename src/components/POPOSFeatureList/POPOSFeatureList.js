import React from 'react'
import POPOSFeature from '../POPOSFeature/POPOSFeature'
import './POPOSFeatureList.css'

function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
	return <section className="POPOSFeatureList">{icons}</section>
}

export default POPOSFeatureList
