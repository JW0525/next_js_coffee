// import mongoose from "mongoose";
let mongoose = require('mongoose');
import { categoryListSchema } from "./schema";

export let CategoryList = mongoose.models.CategoryList || mongoose.model('CategoryList', categoryListSchema);