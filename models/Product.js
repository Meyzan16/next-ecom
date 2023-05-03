import { Schema, model,models } from "mongoose";

const ModelSchema = new Schema({
    title: {type:String, required:true},
    description: String, 
    price: {type:Number, required:true},
});

const Product = models.Product || model('Product', ModelSchema);

export default Product;