const express = require('express');
// const cors = require('cors');
const res = require('express/lib/response');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
const userRoutes = require('./routes/userRoutes')

const port = process.env.PORT || 5000;
dotenv.config();
connectDB();

app.use(express.json());
// app.use(cors());



app.get('/', (req, res)=>{
    res.send('my server is running..')
})

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// })
// app.get('/api/chat/:id', (req, res) => {
//     const id = req.params.id;
//     const singleChat = chats.find(c => c._id === id);
//     res.send(singleChat)
// })

// user section
app.use('/api/user', userRoutes)

app.listen(port, () => {
    console.log('listning to port', port);
})