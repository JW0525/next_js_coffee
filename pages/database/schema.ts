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
          option: [],
          imageUrl: String,
          isSellYn: Boolean,
          isRecommended: Boolean
        }
      ]
    }
  ]
})

export const CategoryList = mongoose.models.CategoryList || mongoose.model('CategoryList', categoryListSchema);
