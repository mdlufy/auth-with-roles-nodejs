const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000;
const {mongoConfig} = require('./.config'); 

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(mongoConfig);
        app.listen(PORT, () => console.log(`server start on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();