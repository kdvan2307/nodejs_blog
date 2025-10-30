const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const a = 5;
    const b = 10;
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
