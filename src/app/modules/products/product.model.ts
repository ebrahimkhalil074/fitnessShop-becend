import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],  // Custom error message
        trim: true,
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],  // Custom error message
        min: [0, 'Price must be a positive number'],  // Validation with error message
      },
      description: {
        type: String,
        required: [true, 'Description is required'],  // Custom error message
        minlength: [10, 'Description must be at least 10 characters long'],
      },
      image: {
        type: String,
        required: [true, 'Image URL is required'],  // Custom error message
        validate: {
          validator: function (value: string) {
            return /^(http|https):\/\/[^ "]+$/.test(value);  // Simple URL validation
          },
          message: 'Please provide a valid URL for the image',  // Custom error message for invalid URL
        },
      },
      category: {
        type: String,
        required: [true, 'Category is required'],  // Custom error message
        trim: true,
      },
      stock: {
        type: Number,
        required: [true, 'Stock is required'],  // Custom error message
        min: [0, 'Stock must be at least 0'],  // Validation for non-negative numbers
      },
});

const Product = model('Product', productSchema);
export default Product;
