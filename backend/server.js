const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
// const { path } = require('./app');

// config
dotenv.config({ path: 'backend/config/config.env' });

//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server in wordking on http://localhost:${process.env.PORT}`);
});
