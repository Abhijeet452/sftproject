const connectToMongo=require('./db');
const express = require('express');
const cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello Everyone!')
// })
// Available routes are
app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/internship', require('./routes/internship'));

app.listen(port, () => {
  console.log(`PrimeInternships listening at http://localhost:${port}`)
})