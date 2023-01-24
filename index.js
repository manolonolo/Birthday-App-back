require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;
const { getDbInfo } = require('./src/getDbInfo/getDbInfo');

conn.sync({ force: true }).then(getDbInfo, console.log('Gifts loaded.')).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at ${port}`);
  });
});
