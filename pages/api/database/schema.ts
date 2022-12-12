import mongoose from 'mongoose';

export const categoryListSchema = new mongoose.Schema({
  categoryList: [
    {
      id: Number,
      name: String,
      list: [
        {
          id: Number,
          name: String,
          description: String,
          price: Number,
          option: { type: Array, default: [] },
          imageUrl: String,
          isSellYn: Boolean,
          isRecommended: Boolean
        }
      ]
    }
  ]
})

export const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  birthDate: String,
  coupon: Number,
  amounts: Number
})