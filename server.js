const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://yourMongoDBLink', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
