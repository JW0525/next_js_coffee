import mongoose from "mongoose";
import { categoryListSchema } from "./schema";

export let CategoryList = mongoose.models.CategoryList || mongoose.model('CategoryList', categoryListSchema);