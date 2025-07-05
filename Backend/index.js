const express = require('express');
const mongoDB = require('./Db');
const cors = require('cors'); 

const app = express();
const port = 5000;

mongoDB();  

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());  

app.use('/api', require("./Routes/CUser"));  
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));  
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
