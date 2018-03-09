import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const yrvSchema = new mongoose.Schema({
  videoId: { type: String, unique: true, required: true },
  videoStart: { type: Number, trim: true, default: 0 },
  videoEnd: { type: Number, trim: true, default: null },
  addedAt: { type: Date, default: Date.now() }
});

const YRV = mongoose.model('YRV', yrvSchema);

export default YRV;
