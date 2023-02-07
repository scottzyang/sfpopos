function POPOSSpace({ name, image, address }) {
  return(
    <div>
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="50 California St." />
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace
