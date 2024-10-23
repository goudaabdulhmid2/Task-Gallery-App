import mongoose, { Document } from "mongoose";

export interface PhotoDocument extends Document {
    path: string,
    title?: string
}

const photoSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    title: String
})

export const Photo = mongoose.model("Photo", photoSchema);