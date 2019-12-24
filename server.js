const PORT = 3000;

const express = require('express');

const app = express();
app.use(express.static('docs'));

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT)
})