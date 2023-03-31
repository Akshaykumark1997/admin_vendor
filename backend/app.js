const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const path = require('path');
const dbconnect = require('./config/connections');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dbconnect.dbconnect();

app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORTNO || 8000, () => {
  console.log('server started listening to port');
});
