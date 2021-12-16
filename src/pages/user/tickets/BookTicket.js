import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function BookTicket() {
    const location = useLocation();

    const [tour, setTour] = useState();

    let navigate = useNavigate();

    const [ticketToCreate, setTicketToCreate] = useState({
        email: "",
        quantity: 0,
        date: "",
    });

    useEffect(() => {
        if (location.state) {
            console.log(location.state);
            const { tour } = location.state;
            setTour(tour);
        }
    }, [location]);

    console.log(ticketToCreate);

    const handleSubmit = () => {
        let newTicket = Object.assign({ ...ticketToCreate, tourId: tour.id });
        console.log(newTicket);
        postNewTicket(newTicket);
        navigate("/", { replace: true });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTicketToCreate({ ...ticketToCreate, [name]: value });
    };

    const postNewTicket = async (newTicket) => {
        try {
            const response = await fetch("http://localhost:3030/tickets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTicket),
            });
            const data = await response.json();
            console.log("data posted", data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <h2>Book a Ticket</h2>
            <label htmlFor="name">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={ticketToCreate.email}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                type="quantity"
                id="quantity"
                name="quantity"
                onChange={handleChange}
                value={ticketToCreate.quantity}
            />
            <label htmlFor="date">Date of Tour</label>
            <input
                type="date"
                id="date"
                name="date"
                onChange={handleChange}
                value={ticketToCreate.date}
            />
            <button type="submit">Create Tour</button>
        </form>
    );
}

export default BookTicket;
