const server = app.listen(() => {
    const port = server.address().port;
    console.log(`Server running at http://localhost:${port}/`);
});
