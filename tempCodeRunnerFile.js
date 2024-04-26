app.post('/submit', async (req, res) => {
    try {
        const { fullname, phone, arrival_date, leaving_date } = req.body;

        const booking = new Booking({
            fullname,
            phone,
            arrival_date,
            leaving_date
        });

        await booking.save();

        res.send('Booking successfully added to the database.');
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal Server Error');
    }
});