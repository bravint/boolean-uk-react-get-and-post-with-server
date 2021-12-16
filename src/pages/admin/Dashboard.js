import ToursList from "./components/ToursList"
import ShowsList from "./components/ShowsList"

function Dashboard(props) {
  const { tours, shows } = props

  return (
    <main>
      <h1>Dashboard</h1>
      <ToursList tours={tours} />

      <ShowsList shows={shows} />
    </main>
  )
}

export default Dashboard
