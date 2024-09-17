import mongoose from "mongoose";
const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter Book title"],
    },
    author: {
      type: String,
      required: [true, "Please enter Author name."],
    },
    isbn: {
      type: Number,
      required: [true, "ISBN is required"],
    },
    publishedDate: {
      type: String,
      required: [true, "Please enter published date."],
    },
    price: {
      type: Number,
      required: [true, "Please enter price."],
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Product", BookSchema);
