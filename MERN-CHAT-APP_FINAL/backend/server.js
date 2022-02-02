const express = require('express');
// PORT = 5000;
const PORT = process.env.PORT || 5000
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');



const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is Running...");
});

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// });

// app.get('/api/chat/:id', (req, res) => {
//     // console.log(req);
//     // console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)



app.listen(PORT, console.log(`Server is running on port : ${5000}`));