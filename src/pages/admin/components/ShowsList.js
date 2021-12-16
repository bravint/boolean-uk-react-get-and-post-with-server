function ShowsList(props) {
  const { shows } = props

  return (
    <>
      <h2>Available Shows</h2>
      <ul>
        {shows.map((show, index) => {
          const { name, price } = show

          return (
            <li key={index}>
              <h3>{name}</h3>
              <p>Price: £{price}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ShowsList
