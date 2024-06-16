import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [100, 'Product name should be less than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true,
        maxlength: [1000, 'Product description should be less than 1000 characters']
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true,
        maxlength: [50, 'Category should be less than 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative']
    },
    sku: {
        type: String,
        required: [true, 'SKU is required'],
        unique: true,
        trim: true,
        maxlength: [50, 'SKU should be less than 50 characters']
    },
    images: [
        {
            type: String,
            trim: true
        }
    ],
    brand: {
        type: String,
        trim: true,
        maxlength: [50, 'Brand name should be less than 50 characters']
    },
    weight: {
        type: Number,
        min: [0, 'Weight cannot be negative']
    },
    dimensions: {
        length: { type: Number, min: [0, 'Length cannot be negative'] },
        width: { type: Number, min: [0, 'Width cannot be negative'] },
        height: { type: Number, min: [0, 'Height cannot be negative'] }
    },
    color: {
        type: String,
        trim: true,
        maxlength: [30, 'Color should be less than 30 characters']
    },
    tags: [
        {
            type: String,
            trim: true,
            maxlength: [30, 'Tag should be less than 30 characters']
        }
    ],
    isFeatured: {
        type: Boolean,
        default: false
    },
    ratings: [
        {
            userId: { type: Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, min: 1, max: 5 },
            comment: { type: String, trim: true, maxlength: [500, 'Comment should be less than 500 characters'] },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export const Product = model("Product", productSchema);
