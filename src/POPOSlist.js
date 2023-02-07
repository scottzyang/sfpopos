import POPOSSpace from "./POPOSSpace"
import "./POPOSList.css"
import data from './sfpopos-data.json'

function POPOSList() {
  const spaces = data.map((space) => {
    return (
      <POPOSSpace name={space.title} address={space.address} image={space.images[0]}/>
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
};

export default POPOSList
