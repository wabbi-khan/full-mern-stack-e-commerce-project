const app = require('./app');
const dotenv = require('dotenv');
const { path } = require('./app');

// config
dotenv.config({ path: 'backend/config/config.env' });
app.listen(process.env.PORT, () => {
  console.log(`Server in wordking on http://localhost:${process.env.PORT}`);
});
