import mongoose from "mongoose";
import { categoryListSchema } from "./schema";

export const CategoryList = mongoose.models.CategoryList || mongoose.model('CategoryList', categoryListSchema);
