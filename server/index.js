const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// importing routers
const authRouter = require('./routers/authRouter');
const adminRouter = require('./routers/admin');

// env variables
require('dotenv').config();
const PORT = process.env.PORT;
const URI = process.env.MONGOOSE_URI;

const app = express();

const corsConfig = {
  origin: 'http://localhost:4200',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

(async function bootstrap() {
  try {
    await mongoose.connect(URI);
    console.log('Connected to DB.');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
})();
