# GET and POST with a Server

In this exercise, you are going to practice using routes alongside `fetch` requests to a server.

## Get Started

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project
4. Run `json-server` - `json-server --watch db/db.json --routes db/routes.json --port 3030``npx json-server --watch db/db.json --routes db/routes.json --port 3030`(or just , if you already have `json-server` installed)
5. Finally, type `npm run start`, which starts a development server that runs your website in the browser. That server will reload your website whenever you make any changes to source files

## Instructions

The instructor will demonstarte the following:

- How to setup and start `json-server` and the build process
- A GET request to the "/tours" endpoint in `/admin/Router.js`
- A POST request to the "/tours" endpoint in `/admin/tours/CreateTour.js`

You will implement the above and:

- A GET request to the "/tickets" endpoint in `/admin/tickets/Summary.js`
- A GET request to the "/tickets" endpoint in `/user/tickets/ViewTickets.js`
- A POST request to the "/tickets" endpoint in `/user/tickets/BookTicket.js`

## Further Work

### Addresses

- Add an `address` resource to `db.json` that works with `tours`
- Add a form to the `/admin/tours/CreateTour.js` for the address
- Display the address on the lists

### Attractions

- Add another type of attraction ie. `shows` for Theatre Shows
- Add another route to `/admin/Router.js` for a `CreateShow` form
- Allow users to book tickets to shows
