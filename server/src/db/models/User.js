import mongoose from 'mongoose';

const schema = new (mongoose.Schema)({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

export default mongoose.model('User', schema);
