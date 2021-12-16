import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function ToursList() {
  const [tours, setTours] = useState([])
  const [address, setAddress] = useState([])

  console.log({ tours })
  console.log({ address })

  useEffect(() => {
    fetchTours()
  }, [])

  useEffect(() => {
    fetchAddress()
  }, [tours])

  const fetchTours = async () => {
    try {
      const response = await fetch("http://localhost:3030/tours")
      const data = await response.json()
      console.log("tours data", data)
      setTours(data)
    } catch(error) {
      console.log(error)
    }
  }

  const fetchAddress = async () => {
    try {
      const response = await fetch("http://localhost:3030/address")
      const data = await response.json()
      console.log("address data", data)
      setAddress(data)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    {(address.length > 0 && tours.length > 0) && (
    <ul>
      {tours.map((tour, index) => {
        const { name, price } = tour

        return (
          <li key={index}>
            <h3>{name}</h3>
            <p>Price: £{price}</p>
            <p>Address: {address[index].address}</p>
            <Link to={`/tours/${tour.id}/book`} state={{ tour }}>
              Book Tour
            </Link>
          </li>
        )
      })}
    </ul>
    )}
    </>
  )
}

export default ToursList
