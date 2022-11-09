import mongoose from 'mongoose';

const kittySchema = new mongoose.Schema({
  id: Number,
  name: String
})

const Kitten = mongoose.model('Kitten', kittySchema);

export default Kitten;