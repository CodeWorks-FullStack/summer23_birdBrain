import { Schema } from "mongoose";

export const BirdSchema = new Schema({

  name: { type: String, required: true, minlength: 3, maxlength: 75 },
  imgUrl: { type: String, required: true, maxlength: 300 },
  canFly: { type: Boolean, required: true, default: true },
  size: { type: String, enum: ['small', 'medium', 'large'], default: 'small' },
  reporterId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

}, { timestamps: true, toJSON: { virtuals: true } })


BirdSchema.virtual('reporter', {
  localField: 'reporterId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

BirdSchema.virtual('birdWatcherCount', {
  localField: '_id',
  foreignField: 'birdId',
  ref: 'BirdWatcher',
  count: true
})