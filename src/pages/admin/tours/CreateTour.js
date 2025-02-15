import { useState } from "react"
import { useNavigate } from "react-router"


function CreateTourPage(props) {
  const { tours, setTours } = props

  let navigate = useNavigate()

  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
  })

  const [addressOfTour, setAddressOfTour] = useState({
    address: ""
  })

  console.log({ tourToCreate })
  console.log(tours)

  function handleSubmit(event) {
    event.preventDefault()
    setTours([...tours, tourToCreate])
    postNewTour(tourToCreate, addressOfTour)
    // Redirect to "/" with navigate and navigate
    navigate("/", { replace: true });
  }

  const postNewTour = async (tourToCreate, addressOfTour)  => {
    try {
        const tourResponse = await fetch("http://localhost:3030/tours", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tourToCreate),
        });
        const tourData = await tourResponse.json();
        console.log("data posted", tourData);
        let jsonId = `tour+${tourData.id}`
        Object.assign(addressOfTour, {name: tourData.name}, {uuid:jsonId})
        const addressResponse = await fetch("http://localhost:3030/address", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(addressOfTour),
      });
      const addressData = await addressResponse.json();
      console.log("data posted", addressData);
    } catch (error) {
        console.log(error);
    }
};

  function handleChangeTour(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  function handleChangeAddress(event) {
    const name = event.target.name
    const value = event.target.value

    setAddressOfTour({[name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Create a Tour</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChangeTour}
        value={tourToCreate.name}
      />
      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChangeTour}
        value={tourToCreate.price}
      />
      <label htmlFor="address">address</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={handleChangeAddress}
        value={addressOfTour.address}
      />
      <button type="submit">Create Tour</button>
    </form>
  )
}

export default CreateTourPage
