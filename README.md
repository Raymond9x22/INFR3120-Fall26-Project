# FoundIt - Campus Lost and Found Board

INFR 3120 Fall 2026 Group Project - Part 1 (First Release) - Group 10

**Team members:**
- Raymond (Man Hin) Wong
- Temesgen Teklebrhan
- Jerin Muthalakuzhiyil

**Live site:** (https://foundit-tg5r.onrender.com/)

## About
FoundIt is an online Lost & Found board for our campus. Anyone who lost or found an item (keys, phone, student card, backpack...) can report it in a few seconds, and everyone can see all the reported items in a table on the home page.

## Features in Part 1
- Landing page with our site name and our own team logo
- "Report an Item" hero button that opens a form and saves the item to MongoDB
- Table on the landing page that lists all reported items

## Who did what
| Member | Part |
|---|---|
| Teme | Express project setup (server.js, config folder), MongoDB Atlas connection with mongoose and dotenv, Item model, Report form and GET/POST report routes |
| Jerin | Landing page layout (views/index.ejs) and the index route that loads the items with Item.find() Render deployment (web service, MONGO_URI environment variable, live link) |
| Raymond | GitHub repo and collaborators, team logo, header and footer partials (views/partials) used on both pages, project plan document, README |

## How to run it
1. `git clone` this repo and `cd` into the folder
2. Run `npm install`
3. Make a file called `.env` next to `package.json` with: `MONGO_URI=your-mongodb-atlas-connection-string`
4. Run `npm start` and open http://localhost:3000

The `.env` file is in `.gitignore`, so our database password is never pushed to GitHub.

## Built with
Node.js, Express, EJS, Bootstrap 5, Font Awesome, MongoDB Atlas, Mongoose, dotenv, Render

## Sources
- Lecture code from INFR3120 (CRUD Part 1: Mongoose connection, model and routes; Express Generator setup)
- Bootstrap 5 and Font Awesome, loaded from CDN (getbootstrap.com, fontawesome.com)
- Mongoose docs for schema validation (required, enum, default): https://mongoosejs.com/docs/validation.html
- AI use: Fixing errors.
