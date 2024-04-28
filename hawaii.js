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




























// const express = require('express');
// const path = require('path');
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const { stringify } = require('querystring');

// async function main() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/hotel1', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// const h1infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });

// const h2infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });

// const h3infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });

// const h4infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const h5infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const h6infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const hoteloahu1Schema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const hoteloahu2Schema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const hoteloahu3Schema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const hoteloahu4Schema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const hoteloahu5Schema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });
// const hoteloahu6Schema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     email: String,
//     arrival_date: Date,
//     leaving_date: Date,
//     num_members: String 
// });

// const Booking_h1 = mongoose.model('hotel1data', h1infoSchema);
// const Booking_h2 = mongoose.model('hotel2data', h2infoSchema);
// const Booking_h3 = mongoose.model('hotel3data', h3infoSchema);
// const Booking_h4 = mongoose.model('hotel4data', h4infoSchema);
// const Booking_h5 = mongoose.model('hotel5data', h5infoSchema);
// const Booking_h6 = mongoose.model('hotel6data', h6infoSchema);
// const Booking_oahu1 = mongoose.model('hoteloahu1data', hoteloahu1Schema);
// const Booking_oahu2 = mongoose.model('hoteloahu2data', hoteloahu2Schema);
// const Booking_oahu3 = mongoose.model('hoteloahu3data', hoteloahu3Schema);
// const Booking_oahu4 = mongoose.model('hoteloahu4data', hoteloahu4Schema);
// const Booking_oahu5 = mongoose.model('hoteloahu5data', hoteloahu5Schema);
// const Booking_oahu6 = mongoose.model('hoteloahu6data', hoteloahu6Schema);


// const app = express();
// const hawaii = path.join(__dirname, 'hawaii.html'); 
// const hotel1 = path.join(__dirname, 'hotel1.html');
// const hotel2 = path.join(__dirname, 'hotel2.html');
// const hotel3 = path.join(__dirname, 'hotel3.html');
// const hotel4 = path.join(__dirname, 'hotel4.html');
// const hotel5 = path.join(__dirname, 'hotel5.html');
// const hotel6 = path.join(__dirname, 'hotel6.html');
// const hoteloahu1 = path.join(__dirname, 'hoteloahu1.html');
// const hoteloahu2 = path.join(__dirname, 'hoteloahu2.html');
// const hoteloahu3 = path.join(__dirname, 'hoteloahu3.html');
// const hoteloahu4 = path.join(__dirname, 'hoteloahu4.html');
// const hoteloahu5 = path.join(__dirname, 'hoteloahu5.html');
// const hoteloahu6 = path.join(__dirname, 'hoteloahu6.html');
// const cssFilePath = path.join(__dirname, 'css.css');

// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//     res.sendFile(hawaii);
// });
// app.get('/hotel1', (req, res) => {
//     res.sendFile(hotel1);
// });
// app.get('/hotel2', (req, res) => {
//     res.sendFile(hotel2);
// });
// app.get('/hotel3', (req, res) => {
//     res.sendFile(hotel3);
// });
// app.get('/hotel4', (req, res) => {
//     res.sendFile(hotel4);
// });
// app.get('/hotel5', (req, res) => {
//     res.sendFile(hotel5);
// });
// app.get('/hotel6', (req, res) => {
//     res.sendFile(hotel6);
// });
// app.get('/hoteloahu1', (req, res) => {
//     res.sendFile(hoteloahu1);
// });
// app.get('/hoteloahu2', (req, res) => {
//     res.sendFile(hoteloahu2);
// });
// app.get('/hoteloahu3', (req, res) => {
//     res.sendFile(hoteloahu3);
// });
// app.get('/hoteloahu4', (req, res) => {
//     res.sendFile(hoteloahu4);
// });
// app.get('/hoteloahu5', (req, res) => {
//     res.sendFile(hoteloahu5);
// });
// app.get('/hoteloahu6', (req, res) => {
//     res.sendFile(hoteloahu6);
// });

// app.get('/css.css', (req, res) => {
//     res.sendFile(cssFilePath);
// });

// app.post('/submit', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_h1 = new Booking_h1({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_h1.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/submit2', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_h2 = new Booking_h2({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_h2.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submit3', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_h3 = new Booking_h3({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_h3.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/submit4', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_h4 = new Booking_h4({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_h4.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/submit5', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_h5 = new Booking_h5({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_h5.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/submit6', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_h6 = new Booking_h6({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_h6.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submitoahu1', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_oahu1 = new Booking_oahu1({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_oahu1.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submitoahu2', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_oahu2 = new Booking_oahu2({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_oahu2.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submitoahu3', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_oahu3 = new Booking_oahu3({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_oahu3.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submitoahu4', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_oahu4 = new Booking_oahu4({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_oahu4.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submitoahu5', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_oahu5 = new Booking_oahu5({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_oahu5.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/submitoahu6', async (req, res) => {
//     try {
//         const { fullname, phone, email, arrival_date, leaving_date, num_members } = req.body;

//         const booking_oahu6 = new Booking_oahu6({
//             fullname,
//             phone,
//             email,
//             arrival_date: new Date(arrival_date),
//             leaving_date: new Date(leaving_date),
//             num_members 
//         });
//         await booking_oahu6.save();
//         res.send('Booking successfully added to the database.');
//     } catch (error) {
//         console.error('Error adding booking:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.use((req, res) => {
//     res.status(404).send('404 Not Found');
// });

// const server = app.listen(() => {
//     const port = server.address().port;
//     console.log(`Server running at http://localhost:${port}/`);
// });

// main().catch(err => console.log(err));