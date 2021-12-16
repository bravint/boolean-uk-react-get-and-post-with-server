import { useState } from "react"
import { useNavigate } from "react-router"


function CreateShowsPage(props) {
  const { shows, setShows } = props

  let navigate = useNavigate()

  const [showToCreate, setShowToCreate] = useState({
    name: "",
    price: 0,
  })

  const [addressOfShow, setAddressOfShow] = useState({
    address: ""
  })

  console.log({ showToCreate })
  console.log(shows)

  function handleSubmit(event) {
    event.preventDefault()
    setShows([...shows, showToCreate])
    postNewShow(showToCreate, addressOfShow)
    // Redirect to "/" with navigate and navigate
    navigate("/", { replace: true });
  }

  const postNewShow = async (showToCreate, addressOfShow)  => {
    try {
        const tourResponse = await fetch("http://localhost:3030/shows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(showToCreate),
        });
        const showData = await tourResponse.json();
        console.log("data posted", showData);
        let jsonId = `show+${showData.id}`
        Object.assign(addressOfShow, {name: showData.name}, {id: jsonId})
        const addressResponse = await fetch("http://localhost:3030/address", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(addressOfShow),
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

    setShowToCreate({ ...showToCreate, [name]: value })
  }

  function handleChangeAddress(event) {
    const name = event.target.name
    const value = event.target.value

    setAddressOfShow({[name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Create a Show</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChangeTour}
        value={showToCreate.name}
      />
      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChangeTour}
        value={showToCreate.price}
      />
      <label htmlFor="address">address</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={handleChangeAddress}
        value={addressOfShow.address}
      />
      <button type="submit">Create Show</button>
    </form>
  )
}

export default CreateShowsPage
