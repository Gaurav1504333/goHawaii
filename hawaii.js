const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hotel1', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Define a generic booking schema
const bookingSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String
});

// Define a function to create booking models dynamically
function createBookingModel(collectionName) {
    return mongoose.model(collectionName, bookingSchema);
}

// Define a function to create route handlers dynamically
function createRouteHandler(model) {
    return async (req, res) => {
        try {
            const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;
            const booking = new model({
                fullname,
                phone,
                email,
                arrival_date: new Date(arrival_date),
                leaving_date: new Date(leaving_date),
                num_members
            });
            await booking.save();
            res.send('Booking successfully added to the database.');
        } catch (error) {
            console.error('Error adding booking:', error);
            res.status(500).send('Internal Server Error');
        }
    };
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(__dirname));

// Create routes dynamically for kauais
const kauais = ['hotelkauai1', 'hotelkauai2', 'hotelkauai3'];
kauais.forEach((kauai, index) => {
    const submitAction = `submitkauai${index + 1}`;
    app.get(`/${kauai}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${kauai}.html`));
    });
    app.post(`/${submitAction}`, createRouteHandler(createBookingModel(`hotelkauai${index + 1}data`)));
});

// Create routes dynamically for oahus
const oahus = ['hoteloahu1', 'hoteloahu2', 'hoteloahu3'];
oahus.forEach((oahu, index) => {
    const submitAction = `submitoahu${index + 1}`;
    app.get(`/${oahu}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${oahu}.html`));
    });
    app.post(`/${submitAction}`, createRouteHandler(createBookingModel(`hoteloahu${index + 1}data`)));
});

// Create routes dynamically for molokais
const molokais = ['hotelmolokai1', 'hotelmolokai2', 'hotelmolokai3'];
molokais.forEach((molokai, index) => {
    const submitAction = `submitmolokai${index + 1}`;
    app.get(`/${molokai}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${molokai}.html`));
    });
    app.post(`/${submitAction}`, createRouteHandler(createBookingModel(`hotelmolokai${index + 1}data`)));
});

// Create routes dynamically for lanais
const lanais = ['hotellanai1', 'hotellanai2', 'hotellanai3'];
lanais.forEach((lanai, index) => {
    const submitAction = `submitlanai${index + 1}`;
    app.get(`/${lanai}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${lanai}.html`));
    });
    app.post(`/${submitAction}`, createRouteHandler(createBookingModel(`hotellanai${index + 1}data`)));
});

// Create routes dynamically for mauis
const mauis = ['hotelmaui1', 'hotelmaui2', 'hotelmaui3'];
mauis.forEach((maui, index) => {
    const submitAction = `submitmaui${index + 1}`;
    app.get(`/${maui}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${maui}.html`));
    });
    app.post(`/${submitAction}`, createRouteHandler(createBookingModel(`hotelmaui${index + 1}data`)));
});

// Create routes dynamically for iohs
const iohs = ['hotelioh1', 'hotelioh2', 'hotelioh3'];
iohs.forEach((ioh, index) => {
    const submitAction = `submitioh${index + 1}`;
    app.get(`/${ioh}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${ioh}.html`));
    });
    app.post(`/${submitAction}`, createRouteHandler(createBookingModel(`hotelioh${index + 1}data`)));
});

app.get('/css.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hawaii.html'));
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

const server = app.listen(() => {
    const port = server.address().port;
    console.log(`Server running at http://localhost:${port}/`);
});

main().catch(err => console.log(err));