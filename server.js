const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // If you have static files (CSS, JS, images)

app.get('/', (req, res) => {
    res.send('Hello, Render!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




