import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import CreateShowsPage from "./shows/CreateShow";
import CreateTourPage from "./tours/CreateTour";
import Dashboard from "./Dashboard";
import TicketsSummary from "./tickets/Summary";

function AdminRouter() {
    const [tours, setTours] = useState([]);
    const [shows, setShows] = useState([]);

    console.log({ tours });
    console.log({ shows })

    useEffect(() => {
        fetchShows();
        fetchTours();
    }, []);

    const fetchShows = async () => {
        try {
            const response = await fetch("http://localhost:3030/shows");
            const data = await response.json();
            console.log("shows: fetched data", data);
            setShows(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchTours = async () => {
        try {
            const response = await fetch("http://localhost:3030/tours");
            const data = await response.json();
            console.log("tours: fetched data", data);
            setTours(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin/">Admin Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/tours/create">Create a Tour</Link>
                        </li>
                        <li>
                            <Link to="/admin/shows/create">Create a Show</Link>
                        </li>
                        <li>
                            <Link to="/admin/tickets/summary">
                                Tickets Summary
                            </Link>
                        </li>
                        <li>
                            <Link to="/">User Pages</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={<Dashboard tours={tours} shows={shows} />}
                />
                <Route
                    path="/tours/create"
                    element={
                        <CreateTourPage tours={tours} setTours={setTours} />
                    }
                />
                <Route
                    path="/shows/create"
                    element={
                        <CreateShowsPage shows={shows} setShows={setShows} />
                    }
                />
                <Route path="tickets/summary" element={<TicketsSummary />} />
            </Routes>
        </>
    );
}

export default AdminRouter;
