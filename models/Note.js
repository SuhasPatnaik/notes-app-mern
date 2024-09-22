const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const noteSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    ticketId: {
      type: uuid(),
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
