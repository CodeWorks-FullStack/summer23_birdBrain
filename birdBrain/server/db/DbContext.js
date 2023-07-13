import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BirdSchema } from '../models/Bird.js';
import { BirdWatcherSchema } from '../models/BirdWatcher.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Birds = mongoose.model('Bird', BirdSchema)

  BirdWatchers = mongoose.model('BirdWatcher', BirdWatcherSchema)
}

export const dbContext = new DbContext()
