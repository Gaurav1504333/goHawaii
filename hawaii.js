const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { stringify } = require('querystring');

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

const h1infoSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String 
});

const h2infoSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String 
});

const h3infoSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String 
});

const h4infoSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String 
});
const h5infoSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String 
});
const h6infoSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    arrival_date: Date,
    leaving_date: Date,
    num_members: String 
});


const Booking_h1 = mongoose.model('hotel1data', h1infoSchema);
const Booking_h2 = mongoose.model('hotel2data', h2infoSchema);
const Booking_h3 = mongoose.model('hotel3data', h3infoSchema);
const Booking_h4 = mongoose.model('hotel4data', h4infoSchema);
const Booking_h5 = mongoose.model('hotel5data', h5infoSchema);
const Booking_h6 = mongoose.model('hotel6data', h6infoSchema);

const app = express();
const hawaii = path.join(__dirname, 'hawaii.html'); 
const hotel1 = path.join(__dirname, 'hotel1.html');
const hotel2 = path.join(__dirname, 'hotel2.html');
const hotel3 = path.join(__dirname, 'hotel3.html');
const hotel4 = path.join(__dirname, 'hotel4.html');
const hotel5 = path.join(__dirname, 'hotel5.html');
const hotel6 = path.join(__dirname, 'hotel6.html');
const cssFilePath = path.join(__dirname, 'css.css');

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(hawaii);
});
app.get('/hotel1', (req, res) => {
    res.sendFile(hotel1);
});
app.get('/hotel2', (req, res) => {
    res.sendFile(hotel2);
});
app.get('/hotel3', (req, res) => {
    res.sendFile(hotel3);
});
app.get('/hotel4', (req, res) => {
    res.sendFile(hotel4);
});
app.get('/hotel5', (req, res) => {
    res.sendFile(hotel5);
});
app.get('/hotel6', (req, res) => {
    res.sendFile(hotel6);
});
app.get('/css.css', (req, res) => {
    res.sendFile(cssFilePath);
});

app.post('/submit', async (req, res) => {
    try {
        const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

        const booking_h1 = new Booking_h1({
            fullname,
            phone,
            email,
            arrival_date: new Date(arrival_date),
            leaving_date: new Date(leaving_date),
            num_members 
        });
        await booking_h1.save();
        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/submit2', async (req, res) => {
    try {
        const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

        const booking_h2 = new Booking_h2({
            fullname,
            phone,
            email,
            arrival_date: new Date(arrival_date),
            leaving_date: new Date(leaving_date),
            num_members 
        });
        await booking_h2.save();
        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/submit3', async (req, res) => {
    try {
        const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

        const booking_h3 = new Booking_h3({
            fullname,
            phone,
            email,
            arrival_date: new Date(arrival_date),
            leaving_date: new Date(leaving_date),
            num_members 
        });
        await booking_h3.save();
        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/submit4', async (req, res) => {
    try {
        const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

        const booking_h4 = new Booking_h4({
            fullname,
            phone,
            email,
            arrival_date: new Date(arrival_date),
            leaving_date: new Date(leaving_date),
            num_members 
        });
        await booking_h4.save();
        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/submit5', async (req, res) => {
    try {
        const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

        const booking_h5 = new Booking_h5({
            fullname,
            phone,
            email,
            arrival_date: new Date(arrival_date),
            leaving_date: new Date(leaving_date),
            num_members 
        });
        await booking_h5.save();
        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/submit6', async (req, res) => {
    try {
        const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

        const booking_h6 = new Booking_h6({
            fullname,
            phone,
            email,
            arrival_date: new Date(arrival_date),
            leaving_date: new Date(leaving_date),
            num_members 
        });
        await booking_h6.save();
        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

const server = app.listen(() => {
    const port = server.address().port;
    console.log(`Server running at http://localhost:${port}/`);
});

main().catch(err => console.log(err));