import config from '../config';
import User from './models/User';

const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default {
  User,
};
