import mongoose from 'mongoose';

const categoryListSchema = new mongoose.Schema({
  categoryList: [
    {
      id: Number,
      name: String,
      list: [
        {
          menuId: Number,
          name: String,
          price: Number,
          option: {any: []},
          imageUrl: String,
          isSellYn: Boolean
        }
      ]
    }
  ]
})

export const CategoryList = mongoose.model('category-list', categoryListSchema);
