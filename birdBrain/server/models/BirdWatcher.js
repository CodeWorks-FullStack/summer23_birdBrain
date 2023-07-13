import { Schema } from "mongoose";

export const BirdWatcherSchema = new Schema({

  birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird' },
  watcherId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

}, { timestamps: true, toJSON: { virtuals: true } })

BirdWatcherSchema.index({ birdId: 1, watcherId: 1 }, { unique: true })

BirdWatcherSchema.virtual('watcher', {
  localField: 'watcherId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

BirdWatcherSchema.virtual('bird', {
  localField: 'birdId',
  foreignField: '_id',
  justOne: true,
  ref: 'Bird'
})