import { useEffect, useState } from "react"

function ViewTickets() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:3030/tickets")
        const data = await response.json()
        console.log("fetched data", data)
        setTickets(data)
      } catch(error) {
        console.log(error)
      }
    }
    fetchTickets()
  }, [])

  return (
    <ul>
      {tickets.map((ticket, index) => {
        const { email, quantity, date, tour } = ticket

        return (
          <li key={index}>
            <h3>{tour.name}</h3>
            <p>Email: {email}</p>
            <p>Quantity: {quantity}</p>
            <p>Date: {date}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default ViewTickets
