const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    //grava o id do usuário que criou
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // cria um relacionamento com o spot ( qual spot ele vai relacionar)
  spot: {
    //grava o id do usuário que criou
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
