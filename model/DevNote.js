import mongoose from "mongoose";
const {Schema, model} = mongoose;

const devSchema = new Schema({
    note: String,
    yourMumsNumber: Number
});

const DevNote = model("DevNote", devSchema);
export default DevNote;