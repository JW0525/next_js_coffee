import mongoose, { Schema } from 'mongoose';

const categoryListSchema = new mongoose.Schema({
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
          option: {any: []},
          imageUrl: String,
          isSellYn: Boolean,
          isRecommended: Boolean
        }
      ]
    }
  ]
})

export const CategoryList = mongoose.model('categoryListData5', categoryListSchema);
