import { dbContext } from "../db/DbContext.js"

class BirdWatchersService {
  async getWatchersByBirdId(birdId) {
    // const birdWatchers = await dbContext.BirdWatchers.find({ birdId: birdId })
    const birdWatchers = await dbContext.BirdWatchers.find({ birdId }).populate('watcher', 'name picture')

    return birdWatchers
  }
  async createBirdWatcher(birdWatcherData) {
    const birdWatcher = await dbContext.BirdWatchers.create(birdWatcherData)

    // await birdWatcher.populate('bird')

    await birdWatcher.populate('watcher', 'name picture')

    return birdWatcher
  }
}

export const birdWatchersService = new BirdWatchersService()