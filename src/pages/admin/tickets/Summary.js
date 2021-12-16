import { useState, useEffect } from "react"
import TicketsTable from "./components/TicketsTable"

function TicketsSummary() {
  const [tickets, setTickets] = useState([])

  console.log({ tickets })

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:3030/tickets")
        const data = await response.json()
        console.log("fetched tickets", data)
        setTickets(data)
      } catch(error) {
        console.log(error)
      }
    }
    fetchTickets()
  }, [])

  return (
    <main>
      <h1>Tickets Summary</h1>
      <TicketsTable tickets={tickets} />
    </main>
  )
}

export default TicketsSummary
